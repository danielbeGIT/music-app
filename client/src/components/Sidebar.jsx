import { useDataLayerValue } from '../context/DataLayer';

// Images
import MainIcon from '../assets/images/icon.png'

// Icons
import { IoLibrary } from 'react-icons/io5'
import { MdHomeFilled, MdSearch } from 'react-icons/md'

// Components
import SidebarOptions from './SidebarOptions'

const Sidebar = () => {
	const [{ playlists }] = useDataLayerValue()

	// if(playlists) {
	// 	console.log("the playlist", playlists)
	// }
	
	return (
		<div className="sidebar">

			<div className="sidebar_logo">
				<img 
					src={MainIcon} 
					alt="Main Logo" 
				/>
			</div>

			<ul>
				<li>
					<MdHomeFilled />
					<span>Home</span>
				</li>
				<li>
					<MdSearch />
					<span>Search</span>
				</li>
				<li>
					<IoLibrary />
					<span>Library</span>
				</li>
			</ul>
			
			<hr/>

			{playlists?.items?.map(playlist => (
				<SidebarOptions links={playlist.name} />
			))}
		</div>
	)
}

export default Sidebar