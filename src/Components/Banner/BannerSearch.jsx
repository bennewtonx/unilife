import './BannerSearch.css'
import React from 'react'
import PropTypes from 'prop-types';

function BannerSearch({ page }) {
  let search = <input type='text' placeholder='Search by city'/>;
  let click = <button>Find Homes</button>;
  let minBedroom = 'Min Bedroom';
  let minBathroom = 'Min Bathroom';
  let maxPrice = 'Max Price';
  let homeType = 'Home Type';
  let bedroomFilter = <input type='text' placeholder='Any bedroom'/>
  let bathroomFilter = <input type='text' placeholder='Any bathroom'/>
  let priceFilter = <input type='text' placeholder='Any price'/>
  let homeFilter = <input type='text' placeholder='Any type'/>
  let bannerClassName = 'banner-search'



  if (page === 'home') {
    // Customize text for the home page
    search = <input type='text' placeholder='Search by city'/>;
    click = <button>Find Homes</button>;
    minBedroom = '';
    minBathroom = '';
    maxPrice = '';
    homeType = '';
    bedroomFilter = '';
    bathroomFilter = '';
    priceFilter = '';
    homeFilter = '';
  } else if (page === 'properties/city/') {
    // Customize text for the search page
    search = '';
    click = '';
    bannerClassName = 'banner-search banner-city'
  } 
  return (
    <div className={bannerClassName}>
      <div>
      <h3>{minBedroom}</h3>
      {bedroomFilter}
      </div>
      <div>
      <h3>{minBathroom}</h3>
      {bathroomFilter}
      </div>
      <div>
      <h3>{maxPrice}</h3>
      {priceFilter}
      </div>
      <div>
      <h3>{homeType}</h3>
      {homeFilter}
      </div>

        {search}
        {click}
    </div>
  )
}
BannerSearch.propTypes = {
  page: PropTypes.string.isRequired,
};

export default BannerSearch