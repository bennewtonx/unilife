import './SeeAllCities.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CityCard from '../CityCard/CityCard';

function SeeAllCities() {
    const [cities, setCities] = useState([]);
      
    useEffect(() => {
      axios.get(`${import.meta.env.VITE_APP_BASE_URL}cities`)
        .then((res) => {
          console.log(res.data.response.name); // Just for debugging, remove this line if not needed
          setCities(res.data.response); // Update the cities state with the array of cities
          console.log(cities)
          console.log(res.data)
        })
        .catch((err) => console.log(err));
    }, []);
  return (
    <div className='see-all-cities-container'>
      <h2>Student accommodations in our top cities</h2>
      <div className='see-all-cities-grid'>
      <CityCard cities={cities} />
      </div>
      <button className='see-all-cities-button'>See all cities</button>
    </div>
  );
}

export default SeeAllCities;
