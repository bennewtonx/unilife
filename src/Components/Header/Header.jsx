import './Header.css'
import React from 'react'
import {MdOutlineHolidayVillage, MdOutlineFavoriteBorder, MdMailOutline} from 'react-icons/md'

function Header() {
  return (
    <div className='header-container'>
    <div className='icon-logo'>
        <MdOutlineHolidayVillage />
        <button>UniLife</button>
    </div>
    <div className='header-buttons'>
        <button><MdOutlineFavoriteBorder/> Shortlist</button>
        <button><MdMailOutline/> Contact Us</button>
        
    </div>

    </div>
  )
}

export default Header