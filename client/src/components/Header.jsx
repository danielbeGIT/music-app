import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material'
import { useDataLayerValue } from '../context/DataLayer'

const Header = () => {
	const [{ user }, dispatch] = useDataLayerValue()

    return (
        <div className="header">
            <div className="searchbar_container">
                <SearchIcon />
                <input 
                    placeholder="What do you want to listen to?" 
                    type="text" 
                />
            </div>

            <div className="profile_info">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                <p>{user?.display_name}</p>
            </div>
        </div>
    )
}

export default Header