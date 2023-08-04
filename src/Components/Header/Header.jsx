import './Header.css'
import React from 'react'
import {MdOutlineHolidayVillage, MdOutlineFavoriteBorder, MdMailOutline} from 'react-icons/md'

function Header() {
  return (
    <div className='header-container'>
    <div className='icon-logo'>
        <MdOutlineHolidayVillage />
        <a href={'/'}>UniLife</a>
    </div>
    <div className='header-buttons'>
        <a><MdOutlineFavoriteBorder/> Shortlist</a>
        <a><MdMailOutline/> Contact Us</a>
        
    </div>

    </div>
  )
}

export default Header