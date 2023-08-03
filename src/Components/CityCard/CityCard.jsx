import './CityCard.css'
import React, {useEffect, useState} from 'react'
import axios from 'axios'

function CityCard({cities}) {

      
        return (
            <div className='city-card-container'>
      {cities.map((city) => (
        <div className='city-card' style={{backgroundImage: `url(${city.image_url})`}} key={city.id}>
          <h2>{city.name}</h2>
          <p>{city.property_count} propeties</p>
        </div>
      ))}
    </div>
        );
      }

export default CityCard