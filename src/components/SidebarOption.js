import React from 'react'
import "../styles/SidebarOption.css"
function SidebarOption({active,text, Icon}) {
  return (
    <div className={`sidebarOption ${active &&"sidebarOption--active"} `}>

        <Icon className="twitter-icons"/>
        <h2 className='twitter-heading-texts sidebarTexts'>{text}</h2>
        

    </div>
  )
}

export default SidebarOption