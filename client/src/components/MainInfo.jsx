import React from 'react'
import { useDataLayerValue } from '../context/DataLayer'

// Components
import SongCards from './SongCards';

// Icons
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DownloadIcon from '@mui/icons-material/Download';

const MainInfo = () => {
	const [{ user, featured_playlist }] = useDataLayerValue()

    return (
        <>
            <div className="song_info">
                <img src={featured_playlist?.images[0]?.url} alt="" />
                <div className="text_info">
                    <p>PLAYLIST</p>
                    <br />
                    <h2>{featured_playlist?.name}</h2>
                    <strong>Welcome back {user?.display_name}!</strong>
                    <p>{featured_playlist?.description}</p>
                </div>
            </div>

            <div className="song_body">
                <div className="song_icons">
                    <PlayCircleFilledIcon className="main_buttons big_play"/>
                    <DownloadIcon className="main_buttons" />
                    <PersonAddAlt1Icon className="main_buttons" />
                    <MoreHorizIcon className="main_buttons"/>
                </div>
                
                {featured_playlist?.tracks.items.map(item => (
                    <SongCards track={item.track} key={item.track.uri}/>
                ))}

                {/* {searchResults.length > 1 ? (
                    featured_playlist?.tracks.items.map(item => (
                        <SongCards track={item.track} key={item.track.uri}/>
                    ))
                ): (
                    <MainInfo />
                )} */}

                
            </div>
        </>
    )
}

export default MainInfo