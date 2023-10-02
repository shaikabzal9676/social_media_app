import './feed.css'
import Share from "../share/Share"
import Post from '../posts/Post'
import {Posts} from "../../dummyData"
function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {Posts.map((p)=>(
          <Post post={p} key={p.id}/>
        ))}
        
      </div>
    </div>
  )
}

export default Feed