import './BannerSearch.css'
import React from 'react'
import PropTypes from 'prop-types';

function BannerSearch({ page }) {
  let search = <input type='text' placeholder='Search by city'/>;
  let click = <button>Find Homes</button>;
  let bannerClassName = 'banner-search'

  if (page === 'home') {
    // Customize text for the home page
    search = <input type='text' placeholder='Search by city'/>;
    click = <button>Find Homes</button>;
    bannerClassName = 'banner-search';
  } else if (page === 'properties/city/') {
    // Customize text for the search page
    search = '';
    click = '';
    bannerClassName = 'banner-search banner-city';
  }

  const bedroomFilter = page === 'properties/city/' && <input type='text' placeholder='Any bedroom'/>;
  const bathroomFilter = page === 'properties/city/' && <input type='text' placeholder='Any bathroom'/>;
  const priceFilter = page === 'properties/city/' && <input type='text' placeholder='Any price'/>;
  const homeFilter = page === 'properties/city/' && <input type='text' placeholder='Any type'/>;

  return (
    <div className={bannerClassName}>
      {page === 'properties/city/' && (
        <>
          <div>
            <h3>Min Bedroom</h3>
            {bedroomFilter}
          </div>
          <div>
            <h3>Min Bathroom</h3>
            {bathroomFilter}
          </div>
          <div>
            <h3>Max Price</h3>
            {priceFilter}
          </div>
          <div>
            <h3>Home Type</h3>
            {homeFilter}
          </div>
        </>
      )}

      {search}
      {click}
    </div>
  );
}


BannerSearch.propTypes = {
  page: PropTypes.string.isRequired,
};

export default BannerSearch