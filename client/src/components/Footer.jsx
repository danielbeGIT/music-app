import React, { useEffect } from 'react'
import { Grid, Slider } from '@mui/material'
import { useDataLayerValue } from '../context/DataLayer'

// Icons
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { 
    BsFillPlayCircleFill, 
    BsFillPauseCircleFill,
    BsShuffle, 
} from 'react-icons/bs'
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg'
import { FiRepeat } from 'react-icons/fi'

const Footer = ({ spotifyApi }) => {
    const [{ item, playing }, dispatch] = useDataLayerValue();

    // Check the current playing state
    useEffect(() => {
        spotifyApi.getMyCurrentPlaybackState().then((res) => {
            dispatch({
                type: 'SET_PLAYING',
                playing: res.is_playing
            })

            dispatch({
                type: 'SET_ITEM',
                item: res.item
            })
        }).catch((err) => {
            console.log("current playing error", err)
        })
    }, [spotifyApi])

    // Pause/Play click function
    const handlePlayPause = () => {
        if (playing) {
            spotifyApi.pause()

            dispatch({
                type: 'SET_PLAYING',
                playing: false
            })
        } else {
            spotifyApi.play()

            dispatch({
                type: 'SET_PLAYING',
                playing: true
            })
        }
    }

    // Skip to previous song
    const skipPrev = () => {
        spotifyApi.skipToPrevious()

        spotifyApi.getMyCurrentPlayingTrack().then((res) => {
            dispatch({
                type: 'SET_ITEM',
                item: res.item
            })

            dispatch({
                type: 'SET_PLAYING',
                playing: true
            })
        }).catch((err) => {
            console.log("skip to prev error", err)
        })
    }

    // Skip to next song
    const skipNext = () => {
        spotifyApi.skipToNext()

        spotifyApi.getMyCurrentPlayingTrack().then((res) => {
            dispatch({
                type: 'SET_ITEM',
                item: res.item
            })

            dispatch({
                type: 'SET_PLAYING',
                playing: true
            })
        }).catch((err) => {
            console.log("skip to next error", err)
        })
    }

    return (
        <div className="footer_content">
            <div className="player_info">
                <img 
                    className="player_image" 
                    src={item?.album.images[0].url} 
                    alt={item?.name} 
                />

                {item ? (
                    <div className="playing_info">
                        <h4>{item.name}</h4>
                        <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                ) : (
                    <div className="playing_info">
                        <h4>Nothing</h4>
                        <p>Playing</p>
                    </div>
                )}
            </div>

            <div className="player_options">
                <BsShuffle className="footer_icon shuffle"/>
                <CgPlayTrackPrev 
                    className="footer_icon previous" 
                    onClick={skipPrev}
                />
                {playing ? (
                    <BsFillPauseCircleFill 
                        className="footer_icon state" 
                        onClick={handlePlayPause}
                    />
                ) : (
                    <BsFillPlayCircleFill 
                        className="footer_icon state" 
                        onClick={handlePlayPause}
                    />
                )}
                <CgPlayTrackNext 
                    className="footer_icon next" 
                    onClick={skipNext}
                />
                <FiRepeat className="footer_icon repeat"/>
            </div>

            <div className="player_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <VolumeDownIcon className="footer_icon"/>
                    </Grid>
                    <Grid item xs className="volume_slider">
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
		</div>
    )
}

export default Footer