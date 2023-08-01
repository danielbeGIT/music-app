import PlayingTrack from "./PlayingTrack";
import PlayerControls from "./PlayerControls";
import Volume from "./Volume";

const Footer = ({ spotifyApi }) => {
  return (
    <div className="footer_content">
      <div className="player_info">
        <PlayingTrack spotifyApi={spotifyApi} />
      </div>
      <div className="player_options">
        <PlayerControls spotifyApi={spotifyApi} />
      </div>
      <div className="player_right">
        <Volume />
      </div>
    </div>
  );
};

export default Footer;
