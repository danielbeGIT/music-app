import React from "react";

// Components
import Sidebar from "../components/Sidebar";
import MainBody from "../components/MainBody";
import Footer from "../components/Footer";

// Images & Styles
import "../assets/styles/MusicPage.scss";

const MusicPage = ({ spotifyApi }) => {
  return (
    <div className="main_body">
      <div className="main_content">
        <Sidebar />
        <MainBody spotifyApi={spotifyApi} />
      </div>
      <Footer spotifyApi={spotifyApi} />
    </div>
  );
};

export default MusicPage;
