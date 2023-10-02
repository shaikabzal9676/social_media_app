
import Feed from '../../components/feed/Feed'
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import './profile.css'
function Profile() {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <>
    <Topbar/>
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img className="profileCoverImg" src={`${PF}/post/post10.jpg` }alt="" />
            <img className="profileCoverPersonImg" src={`${PF}/persons/p1.jpg` } alt="" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Safak Kaughrel</h4>
            Hello Friends!
            <span className="profileInfoDesc">Jan 4 2002</span>
          </div>
        </div>
        <div className="profileRightBottom">

      <Feed />
      <Rightbar profile/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile