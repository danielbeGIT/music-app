import { loginUrl } from '../auth/spotifyAuth'

// Images & Styles
import '../assets/styles/Login.scss'
import MainIcon from '../assets/images/icon.png'

const Login = () => {
    return (
        <div className="login">
            <img src={MainIcon} alt="Main-Icon" />
            <a className="button" href={loginUrl}>Login to spotify</a>
        </div>
    )
}

export default Login