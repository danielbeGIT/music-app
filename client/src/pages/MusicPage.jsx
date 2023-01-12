import { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import useAuth from '../hooks/useAuth'

// Images & Styles
import '../assets/styles/MusicPage.scss'

// Components
import Sidebar from '../components/Sidebar'
import SongCards from '../components/SongCards'
import Footer from '../components/Footer'

const MusicPage = ({ code }) => {
	const accessToken = useAuth(code)
	const [search, setSearch] = useState('')
	console.log(search)
	
	return (
		<Container>
			<div className="main_body">
				{/* Links for playlist etc */}
				<Sidebar />
				<div className="main_content">
					<div className="search_bar">
						<Form.Control type="search" placeholder="Search.." value={search} onChange={e => setSearch(e.target.value)}/>
					</div>
					{/* Song cards */}
					<div className="contents">
						<p>{search}</p>
						<SongCards />
					</div>
				</div>
			</div>
			{/* Play/stop button and small image with currently playing music */}
			<div className="footer">
				<Footer />
			</div>
		</Container>
	)
}

export default MusicPage