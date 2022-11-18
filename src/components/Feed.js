import React ,{useState, useEffect} from 'react'
import "../styles/Feed.css"
import TweetBox from './TweetBox'
import Post from './Post'
import db from "./firebase"
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
    return console.log("data is cominnng")
  }, []);

  return (
    <div className="feed">
        {/* Header */}
         
          <div className="feed__header">
             <h2>Home</h2>
          </div>

        
        {/* Tweet Part of the feed */}
        
        <TweetBox/>
        {/* posts */}
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}

        {/* <Post
        displayName="Ergun Ceylan"
        username="ergncyln"
        verified={true}
        text="Makin the first post"
        avatar="https://media-exp1.licdn.com/dms/image/C4D03AQGgIctg6og_Xg/profile-displayphoto-shrink_800_800/0/1640168899458?e=2147483647&v=beta&t=wLaX7aQqeK2whRfwdVvzyoph9dXoK7I8I3ID-Zp8f2A"
        image="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/parts-url.jpg?width=893&height=600&name=parts-url.jpg"
        /> */}
      
        {/* posts */}
        {/* posts */}
        {/* posts */}
        {/* posts */}


</div>
  )
}

export default Feed