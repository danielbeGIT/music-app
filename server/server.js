const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express();

// Refresh Token
app.post('/refresh', (req, res) => {
    // console.log("testing")

    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        clientId: "28cf7c00dd294d4ba53c0456903dfb13",
        redirectUri: "http://localhost:3000/",
        clientSecret: "74670eb768fb4020afdcaaa5c89a23ee",
        refreshToken,
    })
})


// Login Token
app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        clientId: "28cf7c00dd294d4ba53c0456903dfb13",
        redirectUri: "http://localhost:3000/",
        clientSecret: "74670eb768fb4020afdcaaa5c89a23ee",
    })
})

app.listen(3001)