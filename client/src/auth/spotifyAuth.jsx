const AUTH_URL = "https://accounts.spotify.com/authorize";
const clientId = "28cf7c00dd294d4ba53c0456903dfb13";
const redirectUri = "http://localhost:3000/";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-read-playback-position",
    "user-read-private",
    "user-read-email",
    "user-top-read",
    "user-modify-playback-state",
    "user-library-read",
    "user-library-modify",
];

export const loginUrl = `${AUTH_URL}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=code&show_dialog=true`;