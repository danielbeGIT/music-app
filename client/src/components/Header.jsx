// import React, { useEffect, useState } from 'react'
// import { useDataLayerValue } from '../context/DataLayer'

// // Icons
// import SearchIcon from '@mui/icons-material/Search';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { Avatar } from '@mui/material'

// const Header = ({ spotifyApi }) => {
// 	const [{ user }] = useDataLayerValue()
//     const [search, setSearch] = useState('')
// 	const [searchResults, setSearchResults] = useState([])

//     useEffect(() => {
// 		if(!search) return setSearchResults([])
// 		if(!spotifyApi) return

// 		let cancel = false
// 		spotifyApi.searchTracks(search).then(res => {
// 			if(cancel) return

// 			setSearchResults(res.tracks.items.map(track => {
// 				return {
// 					artist: track.artists[0].name,
// 					title: track.name,
// 					uri: track.uri,
// 					album: track.album.images
// 				}
// 			}))
// 		}).catch((err) => {
//             console.log("search error", err)
//         })

// 		return () => cancel = true
// 	}, [search, spotifyApi])

//     return (
//         <div className="header">
//             <div className="searchbar_container">
//                 <SearchIcon />
//                 <input 
//                     placeholder="What do you want to listen to?" 
//                     type="search" 
//                     onKeyDown={e => {
//                         if (e.key === 'Enter') {
//                             setSearch(e.target.value)
//                         }
//                     }}
//                 />
//             </div>

//             <div className="ham_menu">
//                 <span>
//                     X
//                 </span>
//             </div>

//             <div className="profile_info">
//                 <a href="/#">
//                     <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
//                     <span>{user?.display_name}</span>
//                     <ArrowDropDownIcon />
//                 </a>
//             </div>
//         </div>
//     )
// }

// export default Header