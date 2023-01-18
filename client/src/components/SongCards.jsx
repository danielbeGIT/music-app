import React from 'react'

const SongCards = ({ track }) => {
    return (
        <div className="song_cards">
            <img className="card_image" src={track.album.images[0].url} alt="" />
            <div className="card_info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongCards