import React from 'react'
import "../styles/Widgets.css"
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text"placeholder='Search Twitter' />
      </div>
      
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <h4>#Design</h4>
        <h4>#Programming</h4>
        <h4>#Coding</h4>
        <h4>#FANG_Companies</h4>
        <h4>#FANG_Companies</h4>
        

      </div>

    </div>
  )
}

export default Widgets