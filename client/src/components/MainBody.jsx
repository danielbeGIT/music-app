import React, { useState, useEffect } from "react";
import { useDataLayerValue } from "../context/DataLayer";

// Components
import SongCards from "./SongCards";

// Icons
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DownloadIcon from "@mui/icons-material/Download";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Avatar } from "@mui/material";

const MainBody = ({ spotifyApi }) => {
  const [{ user, discover_weekly }, dispatch] = useDataLayerValue();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Big button to play the featured playlist
  const playPlaylist = (id) => {
    spotifyApi
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcQ9COmYvdajy`,
      })
      .then(() => {
        spotifyApi
          .getMyCurrentPlayingTrack()
          .then((res) => {
            dispatch({
              type: "SET_ITEM",
              item: res.item,
            });

            dispatch({
              type: "SET_PLAYING",
              playing: true,
            });
          })
          .catch((err) => {
            console.log("current playlist error", err);
          });
      })
      .catch((err) => {
        console.log("playing playlist error", err);
      });
  };

  // Play the clicked song
  const playSong = (id) => {
    spotifyApi
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then(() => {
        spotifyApi
          .getMyCurrentPlayingTrack()
          .then((res) => {
            dispatch({
              type: "SET_ITEM",
              item: res.item,
            });

            dispatch({
              type: "SET_PLAYING",
              playing: true,
            });
          })
          .catch((err) => {
            console.log("current song error", err);
          });
      })
      .catch((err) => {
        console.log("play song error", err);
      });
  };

  useEffect(() => {
    if (!search) return setSearchResults([]);

    let cancel = false;
    spotifyApi
      .searchTracks(search)
      .then((res) => {
        if (cancel) return;
        setSearchResults(res);
      })
      .catch((err) => {
        console.log("search error", err);
      });
    console.log(searchResults);

    return () => (cancel = true);
  }, [search, spotifyApi]);

  return (
    <div className="song_contents">
      <div className="header">
        <div className="searchbar_container">
          <SearchIcon />
          <input
            placeholder="What do you want to listen to?"
            type="search"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearch(e.target.value);
              }
            }}
            onChange={(e) => {
              if (search.length > 0) {
                setSearch(e.target.value);
              }
            }}
          />
        </div>

        <div className="ham_menu">
          <span>X</span>
        </div>

        <div className="profile_info">
          <a href="/#">
            <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
            <span>{user?.display_name}</span>
            <ArrowDropDownIcon />
          </a>
        </div>
      </div>

      <div className="song_info">
        {searchResults.length >= 0 && (
          <>
            <img
              src={discover_weekly?.images[0]?.url}
              alt={discover_weekly?.name}
            />
            <div className="text_info">
              <strong>PLAYLIST</strong>
              <br />
              <h2>{discover_weekly?.name}</h2>
              <p>{discover_weekly?.description}</p>
            </div>
          </>
        )}
      </div>

      <div className="song_body">
        {searchResults.length >= 0 ? (
          <>
            <div className="song_icons">
              <PlayCircleFilledIcon
                className="main_buttons big_play"
                onClick={playPlaylist}
              />
              <DownloadIcon className="main_buttons" />
              <PersonAddAlt1Icon className="main_buttons" />
              <MoreHorizIcon className="main_buttons" />
            </div>

            {discover_weekly?.tracks.items.map((item) => (
              <SongCards
                playSong={playSong}
                track={item.track}
                key={item.track.uri}
              />
            ))}
          </>
        ) : (
          <>
            {searchResults?.tracks.items.map((item) => (
              <SongCards playSong={playSong} track={item} key={item.uri} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MainBody;
