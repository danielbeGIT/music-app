import { useState, useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
import useAuth from '../hooks/useAuth'
import SpotifyWebApi from 'spotify-web-api-node'
import { useStateProvider } from '../context/StateProvider'

// Images & Styles
import '../assets/styles/MusicPage.scss'

// Components
import Navbar from '../components/Navbar'
import SongCards from '../components/SongCards'
import FooterPlayer from '../components/FooterPlayer'
// import axios from 'axios'

const spotifyApi = new SpotifyWebApi({
	clientId: "28cf7c00dd294d4ba53c0456903dfb13",
})

const MusicPage = ({ code }) => {
	const accessToken = useAuth(code)

	const [player, setPlayer] = useState(null)
	
	// dispatch is to target the stateprovider update it etc
	const [{ user }, dispatch] = useStateProvider()


	useEffect(() => {
		spotifyApi.setAccessToken(accessToken)
		// setPlayer(accessToken)

		const getMyData = async () => {
			try {
				await spotifyApi.getMe().then(user => {
					console.log("here", user.body)

					setPlayer(user.body.display_name)
				})
	
			} catch (e) {
				console.log("Error message", e)
			}
		}
		getMyData()
	}, [accessToken])
	
	console.log("the user", player)



	const [search, setSearch] = useState('')
	console.log(search)
	
	return (
		<Container>
			<div className="main_body">
				{/* Links for playlist etc */}
				<Navbar />
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
							{/* Mobile Navbar */}
							{/* <Navbar /> */}
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