// Images & Styles
import MainIcon from '../assets/images/icon.png'

const Navbar = () => {
	return (
		<div className="nav_bar">
			<div className="top_links">
				<div className="logo">
					<img src={MainIcon} alt="Main-Icon" />
				</div>
				<ul>
					<li>
						<span>Home</span>
					</li>
					<li>
						<span>Trending</span>
					</li>
					<li>
						<span>Playlist</span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar