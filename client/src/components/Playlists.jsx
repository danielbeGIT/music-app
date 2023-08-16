import { useDataLayerValue } from "../context/DataLayer";

const Playlists = ({ spotifyApi }) => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  const onClickPlaylist = (playlistId) => {
    spotifyApi.getPlaylist(playlistId.id).then((tracks) => {
      dispatch({
        type: "SET_PLAYLIST_ID",
        selected_playlist_id: tracks,
      });
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
