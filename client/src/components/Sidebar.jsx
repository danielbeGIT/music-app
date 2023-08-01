// Components
import Playlists from "./Playlists";

// Images & Icons
import MainIcon from "../assets/images/icon.png";
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_logo">
        <img src={MainIcon} alt="Main Logo" />
      </div>
      <ul>
        <li className="sidebar_options">
          <MdHomeFilled />
          <span>Home</span>
        </li>
        <li className="sidebar_options">
          <MdSearch />
          <span>Search</span>
        </li>
        <li className="sidebar_options">
          <IoLibrary />
          <span>Library</span>
        </li>
      </ul>

      <hr />
      <div className="playlist_options">
        <Playlists />
      </div>
    </div>
  );
};

export default Sidebar;
