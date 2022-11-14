import React from 'react'
import "../styles/Sidebar.css"
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ProfileNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function Sidebar() {
  return (
    <div className="sidebar">
        {/* Twitter Icon */}
        <TwitterIcon/>
        {/* Sidebar Option */}
        <SidebarOption text="Home" Icon={HomeIcon}/>
        <SidebarOption text="Explore" Icon={SearchIcon}/>
        <SidebarOption text="Notifications" Icon={ProfileNoneIcon}/>
        <SidebarOption text="Messages" Icon={MailOutlineIcon}/>
        <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon}/>
        <SidebarOption text="Lists" Icon={ListAltIcon}/>
        <SidebarOption text="Profile" Icon={PermIdentityIcon}/>
        <SidebarOption text="More" Icon={MoreHorizIcon}/>
      
        {/* Sidebar Option */}
        {/* Sidebar Option */}
        {/* Sidebar Option */}
        {/* Sidebar Option */}
        {/* Sidebar Option */}



    </div>
  )
}

export default Sidebar