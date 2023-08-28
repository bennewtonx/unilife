import './HomeDetailsPage.css'
import React from 'react'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Header from './../../Components/Header/Header';
import KeepInTouch from './../../Components/KeepInTouch/KeepInTouch';
import Footer from './../../Components/Footer/Footer';
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
<div className='home-details-container'>
  <Header/>
  {property && property.images && (
        <div className='property-details'key={property._id}>
          <div className='property-images-container'>
          <button>Back to search</button>
            <div className='property-main-image'>
              <img src={property.images[0]} alt='Main Property' />
            </div>
            <div className='property-side-images'>
              {property.images.slice(1, 4).map((image, index) => (
                <img key={index} src={image} alt={`Property ${index + 2}`} />
              ))}
            </div>
          </div>
          <div className='property-info-container'>
          <div className='property-info'>
            <div className='property-address'>
            <h2>{property.address.street}, {property.address.city}, {property.address.postcode}
            <hr/></h2>
            </div>
            <div className='property-price'>
  <div className='info-block bedrooms'>
    <p>Bedrooms</p>
    <h2>{property.bedroom_count}</h2>
  </div>
  <div className='info-block bathrooms'>
    <p>Bathrooms</p>
    <h2>{property.bathroom_count}</h2>
  </div>
  <div className='info-block property-type'>
    <p>Property Type</p>
    <h2>{property.property_type}</h2>
  </div>
  <div className='info-block rent'>
    <p>Rent (pppw)</p>
    <h2>£{property.rent / property.bedroom_count / 4}</h2>
  </div>
  <div className='info-block furnishing-type'>
    <p>Furnished Type</p>
    <h2>{property.furnished}</h2>
  </div>
  <div className='info-block available-from'>
    <p>Available From</p>
    <h2>{property.availability}</h2>
  </div>
</div>

          </div>
          <div className='property-buttons'>
          <button className='property-shortlist'>Shortlist</button>
          <button className='property-book'>Book Viewing</button>
          </div>
          </div>
          <div className='description'>
            <h1>Description</h1>
            <p>{property.property_description}</p>
          </div>
          <div className='bedroom-prices-container'>
            <h1>Bedroom Prices</h1>
            <div className='bedroom-prices'>
  {Object.entries(property.bedroom_prices).map(([bedroomName, price], index) => (
    <div className='bedroom-price' key={bedroomName}>
      <p>Bedroom {index + 1}:</p>
      <p> £{price}</p>
    </div>
  ))}
</div>

            </div>
  <div className='key-features-container'>
    <h1>Key Features</h1>
  {property.key_features.map((feature, index) => (
    <h2 key={index}>{feature}</h2>
  ))}

  </div>
  <div className='blank-div'></div>
        </div>
      )}
  <KeepInTouch/>
  <Footer/>
</div>
      
  )
}
export default HomeDetailsPage