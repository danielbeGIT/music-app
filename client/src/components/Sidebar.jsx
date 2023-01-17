// Images & Styles
import MainIcon from '../assets/images/icon.png'

import SidebarOptions from './SidebarOptions'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../context/DataLayer';


const Sidebar = () => {
	const [{ playlists }, dispatch] = useDataLayerValue()

	if(playlists) {
		console.log("the playlist", playlists)
	}
	return (
		<div className="sidebar">
			<img 
				className="sidebar_logo"
				src={MainIcon} 
				alt="Main Logo" />
			
			<SidebarOptions Icon={HomeIcon} links="Home"/>
			<SidebarOptions Icon={SearchIcon} links="Search"/>
			<SidebarOptions Icon={LibraryMusicIcon} links="Library"/>
			
			<br/>
			<strong className="sidebar_playlist">
				PLAYLISTS
			</strong>
			<hr/>

			{playlists?.items?.map(playlist => (
				<SidebarOptions links={playlist.name} />
			))}
		</div>
	)
}

export default Sidebar