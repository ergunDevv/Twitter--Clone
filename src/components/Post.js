import React from 'react'
import {Avatar} from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import "../styles/Post.css"
function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
  return (
<div className="post">
  <div className="post__avatar">
  <Avatar src={require("../images/Ergun-modified.png")} />
  </div>
  <div className="post__body">
    <div className="post__header">
        <div className="post__headerText">
        <h3>
            Ergun Ceylan <span className='post__headerSpecial'>hey
            <VerifiedIcon className='post__badge'/> 
            </span>
        </h3>
        </div>
       <div className='post__headerDescription'>
        <p>I'm making twitter clone</p>
       </div>        
    </div>
    <img src={require("../images/Ergun-modified.png")} alt="" className='post__image'/> 
    <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
    </div>
  </div>
</div>


    )
}

export default Post