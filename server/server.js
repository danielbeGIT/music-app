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

    console.log("testing the token", refreshToken)
    
    const spotifyApi = new SpotifyWebApi({
        redirectUri: "http://localhost:3000/",
        clientId: "28cf7c00dd294d4ba53c0456903dfb13",
        clientSecret: "74670eb768fb4020afdcaaa5c89a23ee",
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
        redirectUri: "http://localhost:3000/",
        clientId: "28cf7c00dd294d4ba53c0456903dfb13",
        clientSecret: "74670eb768fb4020afdcaaa5c89a23ee",
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