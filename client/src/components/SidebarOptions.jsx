import React from "react";

const SidebarOptions = ({ title, Icon }) => {
  return (
    <div className="sidebar_options">
      {Icon && <Icon className="sidebar_icon" />}
      {Icon ? <a>{title}</a> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOptions;
