import axios from "axios";

const AUTH_URL = "https://accounts.spotify.com/authorize";
const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-read-playback-position",
  "user-read-email",
  "user-read-private",
  "user-top-read",
  "user-modify-playback-state",
];

export const getResToken = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${AUTH_URL}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;
