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
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Avatar } from "@mui/material";

const MainBody = ({ spotifyApi }) => {
  const [{ user, selected_playlist, selected_playlist_id }, dispatch] =
    useDataLayerValue();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Big button to play the featured playlist
  const playPlaylist = () => {
    spotifyApi
      .play({
        context_uri: `spotify:playlist:` + selected_playlist.id,
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

    return () => (cancel = true);
  }, [search, spotifyApi]);

  useEffect(() => {
    const getInitialPlaylist = () => {
      const currentPlaylist = selected_playlist_id;

      dispatch({
        type: "SET_PLAYLIST",
        selected_playlist: currentPlaylist,
      });
    };
    getInitialPlaylist();
  }, [spotifyApi, selected_playlist_id, dispatch]);

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
              src={selected_playlist?.images[0]?.url}
              alt={selected_playlist?.name}
            />
            <div className="text_info">
              <h2>{selected_playlist?.name}</h2>
              <p>{selected_playlist?.description}</p>
            </div>
          </>
        )}
      </div>

      <div className="song_body">
        {searchResults?.length >= 0 ? (
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

            <div className="card_detail_info">
              <span>#</span>
              <span>Title</span>
              <span>Album</span>
              <AccessTimeIcon />
            </div>

            <hr />

            {selected_playlist?.tracks.items.map((item, id) => (
              <SongCards
                playSong={playSong}
                track={item.track}
                key={item.track.uri}
                id={id + 1}
              />
            ))}
          </>
        ) : (
          <>
            <div className="card_detail_info">
              <span>#</span>
              <span>Title</span>
              <span>Album</span>
              <AccessTimeIcon />
            </div>

            <hr />

            {searchResults?.tracks.items.map((item, id) => (
              <SongCards
                playSong={playSong}
                track={item}
                key={item.uri}
                id={id + 1}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MainBody;
