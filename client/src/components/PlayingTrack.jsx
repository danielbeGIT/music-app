import React, { useEffect } from "react";
import { useDataLayerValue } from "../context/DataLayer";

const PlayingTrack = ({ spotifyApi }) => {
  const [{ item }, dispatch] = useDataLayerValue();

  // Check the current playing state
  useEffect(() => {
    spotifyApi
      .getMyCurrentPlayingTrack()
      .then((res) => {
        dispatch({
          type: "SET_ITEM",
          item: res.item,
        });
      })
      .catch((err) => {
        console.log("current playing error", err);
      });
  }, [spotifyApi, item, dispatch]);

  return (
    <>
      <img
        className="player_image"
        src={item?.album.images[0].url}
        alt={item?.name}
      />

      {item ? (
        <div className="playing_info">
          <h4>{item.name}</h4>
          <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
        </div>
      ) : (
        <div className="playing_info">
          <h4>Nothing</h4>
          <p>Playing</p>
        </div>
      )}
    </>
  );
};

export default PlayingTrack;
