import './BannerSearch.css'
import React from 'react'

function BannerSearch() {
  return (
    <div className='banner-search'>
        <input type='text' placeholder='Search by city'/>
        <button>Find Homes</button>
    </div>
  )
}

export default BannerSearch