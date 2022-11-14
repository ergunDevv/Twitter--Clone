import React from 'react'
import "../styles/SidebarOption.css"
function SidebarOption({text, Icon}) {
  return (
    <div className='sidebarOption'>
        <Icon className="twitter-icons"/>
        <h2 className='twitter-heading-texts'>{text}</h2>
        

    </div>
  )
}

export default SidebarOption