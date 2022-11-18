import React from "react";
import "../styles/TweetBox.css"
import {Avatar, Button} from '@mui/material'
function TweetBox() {
  return <div className="tweetBox">
    <form>
      <div className="tweetBox__input">
        <Avatar src={require("../images/Ergun-modified.png")} />
        <input type="text"placeholder="What's happening?" />
      </div>
        <input type="text"placeholder="Optinal: Enter image URL" className="tweetBox__imageInput" />
      <Button className="tweetBox__tweetButton">Tweet</Button>

    </form>
  </div>
}

export default TweetBox;
