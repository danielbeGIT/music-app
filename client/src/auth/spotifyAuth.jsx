const AUTH_URL = "https://accounts.spotify.com/authorize";
const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
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