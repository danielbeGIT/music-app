require('dotenv').config
const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

// Refresh Token
app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken

    console.log('testing the token', refreshToken)
    
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken,
    })
    spotifyApi.refreshAccessToken().then(data => {
            res.json({
                accessToken: data.body.accessToken,
                expiresIn: data.body.expiresIn,
            })
            console.log('Token has been refreshed!', data.body)
        }).catch(err => {
            console.log(err)
            res.sendStatus(400)
        })
})


// Login Token
app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in,
                refreshToken: data.body.refresh_token,
            })
            console.log('Token has been received!', data.body)
        }).catch(err => {
            console.log(err)
            res.sendStatus(400)
        })
})

app.listen(3001)