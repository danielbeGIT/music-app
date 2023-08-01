import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./context/DataLayer";
import { Routes, Route } from "react-router-dom";

// Auth
import { getResToken } from "./auth/spotifyAuth";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/App.scss";

// Pages
import Login from "./pages/Login";
import MusicPage from "./pages/MusicPage";

const spotifyApi = new SpotifyWebApi();

const App = () => {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getResToken();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotifyApi.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotifyApi
        .getPlaylist("37i9dQZEVXcQ9COmYvdajy")
        .then((res) => {
          console.log(res)
          dispatch({
            type: "SET_PLAYLIST",
            selected_playlist: res,
          });
        })
        .catch((err) => {
          console.log("selected playlist error", err);
        });

      spotifyApi
        .getMe()
        .then((user) => {
          dispatch({
            type: "SET_USER",
            user: user,
          });
        })
        .catch((err) => {
          console.log("user error", err);
        });

      spotifyApi
        .getUserPlaylists()
        .then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });
        })
        .catch((err) => {
          console.log("playlist error", err);
        });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotifyApi,
      });
    }
  }, [token, dispatch]);

  return (
    <>
      {!token ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" element={<MusicPage spotifyApi={spotifyApi} />} />
        </Routes>
      )}
    </>
  );
};

export default App;
