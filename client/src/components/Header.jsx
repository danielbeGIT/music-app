import React from 'react'
import { useDataLayerValue } from '../context/DataLayer'

// Icons
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar } from '@mui/material'

const Header = () => {
	const [{ user }] = useDataLayerValue()

    return (
        <div className="header">
            <div className="searchbar_container">
                <SearchIcon />
                <input 
                    placeholder="What do you want to listen to?" 
                    type="search" 
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
    )
}

export default Header