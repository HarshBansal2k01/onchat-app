import React from "react";
import "./Chat.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from '@mui/icons-material/Mic';
import { Avatar, IconButton } from "@material-ui/core";
import SelectInput from "@mui/material/Select/SelectInput";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {/* actual message */}
        <p className="chat__message">
          <span className="chat__name">Harsh</span>
          This is a real messge
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat_reciever">
          <span className="chat__name">Harsh</span>
          This is a real messge recievd
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            // onChange={(e) => SelectInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button  type="submit">
            Send a message
          </button>
        </form>
        <MicIcon/>
      </div>
    </div>
  );
}

export default Chat;
