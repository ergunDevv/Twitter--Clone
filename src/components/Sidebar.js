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
import Button from '@mui/material/Button';

function Sidebar() {
  return (
    <div className="sidebar">
        {/* Twitter Icon */}
        <TwitterIcon className='sidebar--TwitterIcon'/>
        {/* Sidebar Option */}
        <SidebarOption active text="Home" Icon={HomeIcon}/>
        <SidebarOption text="Explore" Icon={SearchIcon}/>
        <SidebarOption text="Notifications" Icon={ProfileNoneIcon}/>
        <SidebarOption text="Messages" Icon={MailOutlineIcon}/>
        <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon}/>
        <SidebarOption text="Lists" Icon={ListAltIcon}/>
        <SidebarOption text="Profile" Icon={PermIdentityIcon}/>
        <SidebarOption text="More" Icon={MoreHorizIcon}/>
      
        {/* Button --> Tweet */}
        <Button variant="outlined" className='sidebar--tweetButton' fullWidth>Tweet</Button>



    </div>
  )
}

export default Sidebar