import { useDataLayerValue } from '../context/DataLayer';

// Components
import SidebarOptions from './SidebarOptions';

// Images & Icons
import MainIcon from '../assets/images/icon.png'
import { IoLibrary } from 'react-icons/io5'
import { MdHomeFilled, MdSearch } from 'react-icons/md'

const Sidebar = () => {
	const [{ playlists }] = useDataLayerValue()

	return (
		<div className="sidebar">
			<div className="sidebar_logo">
				<img 
					src={MainIcon} 
					alt="Main Logo" 
				/>
			</div>
				<SidebarOptions title="Home" Icon={MdHomeFilled}/>
				<SidebarOptions title="Search" Icon={MdSearch}/>
				<SidebarOptions title="Library" Icon={IoLibrary}/>
			
			<hr/>

			{playlists?.items?.map(playlist => (
				<ul>
					<li>
						<SidebarOptions title={playlist.name}/>
					</li>
				</ul>
			))}
		</div>
	)
}

export default Sidebar