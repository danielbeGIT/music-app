import React from "react";

const SongCards = ({ track, playSong, id }) => {
  const msToMinutes = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds <10 ? "0" : "") + seconds;
  }

  return (
    <div className="song_cards" onClick={() => playSong(track.id)}>
      <div className="card_details">
        <div className="track_number">
          <p>{id}</p>
        </div>
        <div className="card_title">
          <div className="card_title_info">
            <img
              className="card_image"
              src={track.album.images[0].url}
              alt={track.name}
            />
            <div className="card_title_artist">
              <h1>{track.name}</h1>
              <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
            </div>
          </div>
        </div>
        <div className="card_album">
          <h1>{track.album.name}</h1>
        </div>
        <div className="card_duration">
          <h1>{msToMinutes(track.duration_ms)}</h1>
        </div>
      </div>
    </div>
  );
};

export default SongCards;
