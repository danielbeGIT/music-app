import React from 'react'
import { Grid, Slider } from '@mui/material'
import MainIcon from '../assets/images/icon.png'

import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

const Footer = () => {
    return (
        <div className="footer_content">
            <div className="player_info">
                <img className="player_image" src={MainIcon} alt="" />
                <div className="playing_info">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>

            <div className="player_options">
                <ShuffleIcon className="footer_icon footer_green"/>
                <SkipPreviousIcon className="footer_icon"/>
                <PlayCircleOutlineIcon className="footer_icon"fontSize="large"/>
                <SkipNextIcon className="footer_icon"/>
                <RepeatIcon className="footer_icon footer_green"/>
            </div>

            <div className="player_right">
                <Grid container spacing={2}>
                    {/* <Grid item>
                        <PlaylistPlayIcon className="footer_icon"/>
                    </Grid> */}
                    <Grid item>
                        <VolumeDownIcon className="footer_icon"/>
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
		</div>
    )
}

export default Footer