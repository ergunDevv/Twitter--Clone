import React from 'react'
import "../styles/Feed.css"
import TweetBox from './TweetBox'
import Post from './Post'
function Feed() {
  return (
    <div className="feed">
        {/* Header */}
         
          <div className="feed__header">
             <h2>Home</h2>
          </div>

        
        {/* Tweet Part of the feed */}
        
        <TweetBox/>
        {/* posts */}
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        {/* posts */}
        {/* posts */}
        {/* posts */}
        {/* posts */}


</div>
  )
}

export default Feed