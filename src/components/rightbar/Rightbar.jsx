import './rightbar.css'
import {Users} from "../../dummyData"
import Online from '../online/Online'
import { useState } from 'react'
function Rightbar({profile}) {

  const HomeRightBar=()=>{
    return(
<><div className="birthdayContainer">
          <img className='birthdayImg' src="./assets/gift.webp" alt="" />
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 Other friends</b> have a birthday today.</span>
        </div>
        <img className='rightbarAd' src="./assets/ad.webp" alt="" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
          
        </ul></>
    )
  }
const[follow ,setFollow]=useState("Follow")
  const handleFollow=()=>{
    if(follow==="Follow"){
      setFollow("Unfollow")
    }
    else{
      setFollow("Follow")
    }
  }
  const ProfileRightBar=()=>{
    return(
      <>
      <button onClick={handleFollow} className='followButton'>{follow}</button>
       <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/persons/p4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/persons/p2.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/persons/p3.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/persons/p4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/persons/p5.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/persons/p6.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div></>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
      {profile?<ProfileRightBar/>:<HomeRightBar/>}
      </div>
    </div>
  )
}

export default Rightbar