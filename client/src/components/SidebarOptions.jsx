import React from 'react'

const SidebarOptions = ({ links, Icon }) => {
    return (
        <div className="sidebar_options">
            {Icon && <Icon className="sidebar_icon"/>}
            {Icon ? <h4>{links}</h4> : <p>{links}</p>}
        </div>
    )
}

export default SidebarOptions