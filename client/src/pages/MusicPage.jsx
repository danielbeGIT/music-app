import useAuth from '../hooks/useAuth'
import SpotifyWebApi from 'spotify-web-api-js'
import { useEffect, useState } from 'react'
import { useDataLayerValue } from '../context/DataLayer'

// Images & Styles
import '../assets/styles/MusicPage.scss'

// Icons
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar } from '@mui/material'

// Components
import Sidebar from '../components/Sidebar'
import MainInfo from '../components/MainInfo'
import Footer from '../components/Footer'

const spotifyApi = new SpotifyWebApi()

const MusicPage = ({ code }) => {
	const accessToken = useAuth(code)
	const [{ user, token }, dispatch] = useDataLayerValue()

	const [search, setSearch] = useState('')
	const [searchResults, setSearchResults] = useState([])

	useEffect(() => {
		if (!accessToken) return
		spotifyApi.setAccessToken(accessToken)

		dispatch({
			type: 'SET_TOKEN',
			token: accessToken,
		})

		dispatch({
			type: 'SET_SPOTIFY',
			spotify: spotifyApi,
		});

		spotifyApi.getMe().then((user) => {
			dispatch({
				type: 'SET_USER',
				user: user,
			})
		})

		spotifyApi.getUserPlaylists().then((playlists) => {
			console.log("my playlist", playlists)
			
			dispatch({
				type: 'SET_PLAYLISTS',
				playlists,
			})
		})
		
		spotifyApi.getPlaylist('37i9dQZEVXcQ9COmYvdajy').then((response) => {
			dispatch({
				type: 'SET_DISCOVER_WEEKLY',
				discover_weekly: response,
			})
		})
	}, [accessToken, dispatch])

	useEffect(() => {
		if(!search) return setSearchResults([])
		if(!accessToken) return

		let cancel = false
		spotifyApi.searchTracks(search).then(res => {
			if(cancel) return
			console.log(res)
			setSearchResults(res.tracks.items.map(track => {
				return {
					artist: track.artists[0].name,
					title: track.name,
					uri: track.uri,
					album: track.album.images
				}
			}))
		})

		return () => cancel = true
	}, [search, accessToken])
	
	// only console log if there is user and token
	// if (user && token) {
	// 	console.log("the user", user)
	// 	console.log("the token", token)
	// }
	
	return (
		<>
			<div className="main_body">
				<div className="main_content">
					<Sidebar />

					<div className="song_contents">

						<div className="header">
							<div className="searchbar_container">
								<SearchIcon />
								<input 
									placeholder="What do you want to listen to?" 
									type="search" 
									onChange={e => setSearch(e.target.value)}
								/>
							</div>

							<div className="ham_menu">
								<span>
									X
								</span>
							</div>

							<div className="profile_info">
								<a href="/#">
									<Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
									<span>{user?.display_name}</span>
									<ArrowDropDownIcon />
								</a>
							</div>
						</div>
						<MainInfo spotify={spotifyApi}/>
					</div>
				</div>

				<Footer spotify={spotifyApi}/>
			</div>
		</>
	)
}

export default MusicPage