import './HomeDetailsPage.css'
import React from 'react'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

import axios from 'axios'

function HomeDetailsPage({clickedProperty}) {

  const [property, setProperty] = useState([])
  const {propertyId} = useParams()


  useEffect(
    ()=>{
        //call API to get data
        axios.get(`${import.meta.env.VITE_APP_BASE_URL}properties/${propertyId}`)
        .then(res => {
          setProperty(res.data);
          console.log(`this`, res);
        })
        .catch(err => console.log(err));
    }, []); // <-- Correct placement of the array of dependencies

  return (
<div>
  <button>Back to search</button>
  {property && property.images && (
        <div key={property._id}>
          <div className='property-images-container'>
            <div className='property-main-image'>
              <img src={property.images[0]} alt='Main Property' />
            </div>
            <div className='property-side-images'>
              {property.images.slice(1, 4).map((image, index) => (
                <img key={index} src={image} alt={`Property ${index + 2}`} />
              ))}
            </div>
          </div>
          <p>{property.availability}</p>
        </div>
      )}

  <p>{property.data}</p>
</div>
      
  )
}
export default HomeDetailsPage