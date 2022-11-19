import React, {useState, version} from "react";
import "../styles/TweetBox.css"
import {Avatar, Button} from '@mui/material'
import db from "./firebase.js"

function TweetBox() {
  const [tweetMessage,setTweetMessage] =useState("")
  const [tweetImgUrl,settweetImgUrl] =useState("")

  function sendTweet(event){
      event.preventDefault();
      
      db.collection("posts").add({
        displayName:"Ergun Ceylan",
        username:"ergncyln",
        verified:true,
        text:tweetMessage,
        image:tweetImgUrl,
        avatar:"https://media-exp1.licdn.com/dms/image/C4D03AQGgIctg6og_Xg/profile-displayphoto-shrink_800_800/0/1640168899458?e=2147483647&v=beta&t=wLaX7aQqeK2whRfwdVvzyoph9dXoK7I8I3ID-Zp8f2A"

      })
      setTweetMessage("")
      settweetImgUrl("")
  }
  return <div className="tweetBox">
    <form>
      <div className="tweetBox__input">
        <Avatar src={require("../images/Ergun-modified.png")} />
        <input onChange={message=>setTweetMessage(message.target.value)} value={tweetMessage} type="text"placeholder="What's happening?" />
      </div>
        <input onChange={message=>settweetImgUrl(message.target.value)} value={tweetImgUrl} type="text"placeholder="Optinal: Enter image URL" className="tweetBox__imageInput" />
      <Button onClick={sendTweet} type="submit"  className="tweetBox__tweetButton">Tweet</Button>

    </form>
  </div>
}

export default TweetBox;
