import { loginUrl } from '../context/spotifyAuth'

const Login = () => {
    return (
        <div className="LoginPage">
            {/* <img src="" alt="" /> */}
            {/* Make your own logo No Music No Life with button under it */}
            <h1>No Music No Life</h1>

            <a href={loginUrl}>Login to spotify</a>
        </div>
    )
}

export default Login