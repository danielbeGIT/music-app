import { useState, useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
import useAuth from '../hooks/useAuth'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from '../context/DataLayer'

// Images & Styles
import '../assets/styles/MusicPage.scss'

// Components
import Sidebar from '../components/Sidebar'
import SongCards from '../components/SongCards'
import FooterPlayer from '../components/FooterPlayer'
// import axios from 'axios'

const spotifyApi = new SpotifyWebApi()

const MusicPage = ({ code }) => {
	const accessToken = useAuth(code)
	// const [player, setPlayer] = useState(null)
	const [search, setSearch] = useState('')
	console.log(search)

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
	
	// if(user && token) {
	// 	console.log("the user", user)
	// 	console.log("the token", token)
	// }

	
	return (
		<Container>
			<div className="main_body">
				{/* Links for playlist etc */}
				<Sidebar />
				<div className="main_content">
					<div className="search_bar">
						<Form.Control 
							type="search" 
							// What do you want to listen to? another placeholder?
							placeholder="Search" 
							value={search} 
							onChange={e => setSearch(e.target.value)}
						/>
						<div className="menu_button hidden">
							{/* Hamburger button */}
							X
							{/* Mobile Sidebar */}
							{/* <Sidebar /> */}
						</div>
					</div>
					{/* Song cards */}
					<div className="contents">
						<SongCards />
					</div>
				</div>
			</div>
			{/* Play/stop button and small image with currently playing music */}
			<div className="footer">
				<FooterPlayer />
			</div>
		</Container>
	)
}

export default MusicPage