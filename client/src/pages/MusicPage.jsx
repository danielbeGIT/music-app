import { useState, useEffect } from 'react'
// import { Container, Form } from 'react-bootstrap'
import useAuth from '../hooks/useAuth'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from '../context/DataLayer'

// Images & Styles
import '../assets/styles/MusicPage.scss'

// Components
import Sidebar from '../components/Sidebar'
import SongCards from '../components/SongCards'
import Footer from '../components/Footer'

const spotifyApi = new SpotifyWebApi()

const MusicPage = ({ code }) => {
	const accessToken = useAuth(code)
	// const [player, setPlayer] = useState(null)
	// const [search, setSearch] = useState('')
	// console.log(search)

	const [{ user, token }, dispatch] = useDataLayerValue()

	useEffect(() => {
		if (!accessToken) return
		dispatch({
			type: 'SET_TOKEN',
			token: accessToken,
		})
		
		spotifyApi.setAccessToken(accessToken)
		// console.log("the token", accessToken)

		spotifyApi.getMe().then((user) => {
			// console.log("the user", user)

			dispatch({
				type: 'SET_USER',
				user: user,
			})
		})

		spotifyApi.getUserPlaylists().then((playlists) => {
			dispatch({
				type: 'SET_PLAYLISTS',
				playlists: playlists,
			})
		})

		// const getMyData = async () => {
		// 	try {
				
		// 		await spotifyApi.getMe().then((user) => {
		// 			// console.log("the user", user)
		
		// 			dispatch({
		// 				type: 'SET_USER',
		// 				user: user,
		// 			})
		// 		})
	
		// 	} catch (e) {
		// 		console.log("Error message", e)
		// 	}
		// }
		// getMyData()
		
	}, [accessToken, dispatch])
	
	if(user && token) {
		console.log("the user", user)
		console.log("the token", token)
	}

	
	return (
		<>
			<div className="main_body">
				<div className="main_content">
					<Sidebar />
					<SongCards />
				</div>
				<Footer />
			</div>
		</>
	)
}

export default MusicPage