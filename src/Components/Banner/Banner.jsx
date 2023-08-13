import './Banner.css';
import React from 'react';
import PropTypes from 'prop-types';


function Banner({ page }) {
  let title = 'Find Student homes with bills included';
  let description = 'A simple and faster way to search for student accommodation';

  if (page === 'home') {
    // Customize text for the home page
    title = 'Find Student homes with bills included';
    description = 'A simple and faster way to search for student accommodation';
  } else if (page === 'seeallcities') {
    // Customize text for the search page
    title = 'Student Accomodation';
    description = 'UniLife have student accommodation available across the UK. Whatever youre after, we can help you find the right student accommodation for you.';
  } else if (page.startsWith('properties/city')) {
    // Customize text for the search page
    title = 'Search Accomodation';
    description = 'Whatever you’re after, we can help you find the right student accommodation for you.';
  }  
  
  return (
    <div className='banner-container'>
      <div className='banner-text'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
Banner.propTypes = {
  page: PropTypes.string.isRequired,
};
export default Banner;
