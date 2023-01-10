import axios from 'axios'
import { useState, useEffect } from 'react'

const useAuth = ( code ) => {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    // Login to create/get access token.
    useEffect(() => {
        axios.post("http://localhost:3001/login/", {
            // Send "code" to the server/route
            code
        }).then(res => {
            // console.log(res.data)
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)

            // Clean token/code from URL
            window.history.pushState({}, null, '/')
        }).catch((err) => {
            // Send user back to first window if error pop up
            console.log(err)
            window.location = '/'
        })
    }, [code])

    // Refresh access token.
    useEffect(() => {
        // only run this if there is refresh/expire token
        if (!refreshToken || !expiresIn) return
        // interval will run the timer each time anything changes
        const interval = setInterval(() => {
          axios.post("http://localhost:3001/refresh/", {
                // Send refreshToken to the server/route
                refreshToken
            }).then(res => {
                // console.log(res.data)
                setAccessToken(res.data.accessToken)
                setExpiresIn(res.data.expiresIn)
            }).catch((err) => {
                // Send user back to first window if error pop up
                console.log(err)
                window.location = '/'
            })
        }, (expiresIn - 60) * 1000)
    
        // if there are errors clear out the time
        return () => clearInterval(interval)
    }, [refreshToken, expiresIn])

    return accessToken
}

export default useAuth