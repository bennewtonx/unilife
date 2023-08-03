import './Banner.css'
import React from 'react'

function Banner() {
  return (
    <div className='banner-container'>
    <div className='banner-text'>
        <h1>Find Student homes with bills included</h1>
        <p>A simple and faster way to search for student accomodation</p>
    </div>
    <div className='banner-search'>
        <input type='text' placeholder='Search by city'/>
        <button>Find Homes</button>
    </div>
    </div>
  )
}

export default Banner