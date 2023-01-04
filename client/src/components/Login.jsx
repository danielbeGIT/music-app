import { loginUrl } from "../context/spotifyAuth"

const Login = () => {
    return (
        <div className="LoginPage">
            <h1>No Music No Life</h1>
            {/* Make your own logo No Music No Life with button under it */}

            <a href={loginUrl}>Login to spotify</a>
        </div>
    )
}

export default Login