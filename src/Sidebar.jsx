import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Avatar } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        {/* headerleft profile */}
        <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQH20HDWadhVqQ/profile-displayphoto-shrink_800_800/0/1656093450520?e=1667433600&v=beta&t=TSIqrH1vbeef3lYD7VOUQki8lxP2U0gHBKoV55oExJA" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        {/* custom input tag */}
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
