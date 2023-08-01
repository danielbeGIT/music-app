import React, { useEffect } from "react";
import { useDataLayerValue } from "../context/DataLayer";

// Icons
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";

const PlayerControls = ({ spotifyApi }) => {
  const [{ playing }, dispatch] = useDataLayerValue();

  // Check the current playing state
  useEffect(() => {
    spotifyApi
      .getMyCurrentPlaybackState()
      .then((res) => {
        dispatch({
          type: "SET_PLAYING",
          playing: res.is_playing,
        });

        dispatch({
          type: "SET_ITEM",
          item: res.item,
        });
      })
      .catch((err) => {
        console.log("current playing error", err);
      });
  }, [spotifyApi, dispatch]);

  // Pause/Play click function
  const handlePlayPause = () => {
    if (playing) {
      spotifyApi.pause();

      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotifyApi.play();

      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  // Skip to previous song
  const skipPrev = () => {
    spotifyApi.skipToPrevious();

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
        console.log("skip to prev error", err);
      });
  };

  // Skip to next song
  const skipNext = () => {
    spotifyApi.skipToNext();

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
        console.log("skip to next error", err);
      });
  };

  return (
    <>
      <BsShuffle className="footer_icon shuffle" />
      <CgPlayTrackPrev className="footer_icon previous" onClick={skipPrev} />
      {playing ? (
        <BsFillPauseCircleFill
          className="footer_icon state"
          onClick={handlePlayPause}
        />
      ) : (
        <BsFillPlayCircleFill
          className="footer_icon state"
          onClick={handlePlayPause}
        />
      )}
      <CgPlayTrackNext className="footer_icon next" onClick={skipNext} />
      <FiRepeat className="footer_icon repeat" />
    </>
  )
}

export default PlayerControls