// const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=28cf7c00dd294d4ba53c0456903dfb13&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

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

// clientId: process.env.CLIENT_ID,
// redirectUri: process.env.REDIRECT_URI,

// const code = new URLSearchParams(window.location.search).get('code')

// export const getCodeFromUrl = () => {
//     // search for the url location(goes to the #/hastag)
//     return window.location.hash
//     // grab the 1st/1 substring
//     .substring(1)
//     // remove the extra params, go to the first & and stop
//     .split('&')
//     // stop checking after the = mark, take find whatever is inside
//     .reduce((initial, item) => {
//         let parts = item.split('=')
//         // go into the initial array that is return, get code/token from parts[0], pass it to parts[1]
//         initial[parts[0]] = decodeURIComponent(parts[1])

//         return initial
//     }, {})
// }

export const loginUrl = `${AUTH_URL}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=code&show_dialog=true`;