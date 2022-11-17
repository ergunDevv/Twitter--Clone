import React from "react";
import "../styles/TweetBox.css"
import {Avatar, Button} from '@mui/material'
function TweetBox() {
  return <div className="tweetBox">
    <form>
      <div className="tweetBox__input">
        <Avatar src=""/>
        <input type="text"placeholder="What's happening?" />
      </div>
      <Button>Tweet</Button>

    </form>
  </div>
}

export default TweetBox;
