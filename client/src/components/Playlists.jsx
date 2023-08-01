import { useDataLayerValue } from "../context/DataLayer";

const Playlists = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  const onClickPlaylist = (playlistId) => {
    dispatch({
      type: "SET_PLAYLIST_ID",
      selected_playlist_id: playlistId,
    });
  };

  return (
    <>
      <ul>
        {playlists.items?.map((playlist) => (
          <div className="playlist_option">
            <li key={playlist.id} onClick={() => onClickPlaylist(playlist)}>
              {playlist.name}
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Playlists;
