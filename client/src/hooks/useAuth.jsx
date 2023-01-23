import axios from 'axios'
import { useState, useEffect } from 'react'

const useAuth = ( code ) => {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    // Login to create/get access token.
    useEffect(() => {
        axios.post(process.env.REACT_APP_LOGIN, {
            code
        }).then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)

            // Clean token/code from URL
            window.history.pushState({}, null, '/')
        }).catch((err) => {
            console.log(err)
            window.location = '/'
        })
    }, [code])

    // Refresh access token.
    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
          axios.post(process.env.REACT_APP_REFRESH, {
                refreshToken
            }).then(res => {
                setAccessToken(res.data.accessToken)
                setExpiresIn(res.data.expiresIn)
            }).catch((err) => {
                console.log(err)
                window.location = '/'
            })
        }, (expiresIn - 60) * 1000)
    
        return () => clearInterval(interval)
    }, [refreshToken, expiresIn])

    return accessToken
}

export default useAuth