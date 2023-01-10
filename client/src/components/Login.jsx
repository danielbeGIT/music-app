import React from 'react'
import '../assets/styles/App.scss'
import LoginIcon from '../assets/images/icon.png'
import { loginUrl } from '../context/spotifyAuth'

const Login = () => {
    return (
        <div className="login">
            <img src={LoginIcon} alt="NoMusicNoLife" />
            {/* Make your own logo No Music No Life with button under it */}

            <a className="btn btn-success btn-lg" href={loginUrl}>Login to spotify</a>
        </div>
    )
}

export default Login