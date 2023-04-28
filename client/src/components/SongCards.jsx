import React from 'react'

const SongCards = ({ track, playSong }) => {
    return (
        <div 
            className="song_cards" 
            onClick={() => playSong(track.id)}
        >
            <img 
                className="card_image" 
                src={track.album.images[0].url} 
                alt={track.name} 
            />
            <div className="card_info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} - {" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongCards