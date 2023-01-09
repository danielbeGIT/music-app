import axios from "axios"
import { useState, useEffect } from "react"

const useAuth = ( code ) => {
    const [accessToken, setAccessToken] = useState()

    // Login to create/get access token.
    useEffect(() => {
        axios.post("http://localhost:3001/login/", {
            code
        }).then(res => {
            // console.log(res.data)
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)

            // Clean token from URL
            window.history.pushState({}, null, "/")
        }).catch((err) => {
            // Send user back to first window if error pop up
            // window.location = '/'
            console.log(err)
        })
    }, [code])

    return accessToken
}

export default useAuth