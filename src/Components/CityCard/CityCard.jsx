import './CityCard.css'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import SeeAllCitiesPage from '../../Pages/SeeAllCitiesPage/SeeAllCitiesPage';

function CityCard({cities}) {

  // Define a state to store the clicked city name
  const [clickedCityName, setClickedCityName] = useState('');

  // Function to handle the click event and get the value of city.name
  const handleCityClick = (_id) => {
    // Do something with the clicked city name
    
    console.log('Clicked city:', _id);
    setClickedCityName(_id);
  };

  


      
        return (
            <div className='city-card-container'>
      {cities.map((city) => (
        <div className='city-card' style={{backgroundImage: `url(${city.image_url})`}} key={city.id}>
          <Link to={`/properties/city/${city._id}`} style={{ textDecoration: 'none', color: 'white' }} ><h2 onClick={() => handleCityClick(city._id)
          }>{city.name}</h2></Link>
          <p>{city.property_count} propeties</p>
        </div>
      ))}
    </div>
        );
      }

export default CityCard 