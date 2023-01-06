import { useState, useEffect } from 'react'
import axios from 'axios'

const useAuth = ( code ) => {
    const [expiresIn, setExpiresIn] = useState()
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()

    // Login to create/get access token.
    useEffect(() => {
        axios.post('http://localhost:3001/login', {
            code,
        })
    }, [code])

    // Refresh access token.
    useEffect(() => {
        
      })

    return accessToken
}

export default useAuth