import React from 'react'
import { useDataLayerValue } from '../context/DataLayer'

// Components
import SongCards from './SongCards';

// Icons
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DownloadIcon from '@mui/icons-material/Download';

const MainInfo = ({ spotify }) => {
	const [{ discover_weekly }, dispatch] = useDataLayerValue()

    // Play the whole playlist (the big playlist button)
    const playPlaylist = () => {
        spotify.play({
            context_uri: `spotify:playlist:37i9dQZEVXcQ9COmYvdajy`
        }).then((response) => {
            spotify.getMyCurrentPlayingTrack().then((res) => {
                dispatch({
                    type: 'SET_ITEM',
                    item: res.item
                })

                dispatch({
                    type: 'SET_PLAYING',
                    playing: true
                })
            })
        })
    }

    // Play the clicked song
    const playSong = (id) => {
        spotify.play({
            uris: [`spotify:track:${id}`]
        }).then((response) => {
            spotify.getMyCurrentPlayingTrack().then((res) => {
                dispatch({
                    type: 'SET_ITEM',
                    item: res.item
                })

                dispatch({
                    type: 'SET_PLAYING',
                    playing: true,
                })
            })
        })
    }

    return (
        <>
            <div className="song_info">
                <img 
                    src={discover_weekly?.images[0]?.url} 
                    alt={discover_weekly?.name} 
                />
                <div className="text_info">
                    <strong>PLAYLIST</strong>
                    <br />
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="song_body">
                <div className="song_icons">
                    <PlayCircleFilledIcon 
                        className="main_buttons big_play" 
                        onClick={playPlaylist}
                    />
                    <DownloadIcon className="main_buttons" />
                    <PersonAddAlt1Icon className="main_buttons" />
                    <MoreHorizIcon className="main_buttons"/>
                </div>
                
                {discover_weekly?.tracks.items.map(item => (
                    <SongCards playSong={playSong} track={item.track} key={item.track.uri}/>
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