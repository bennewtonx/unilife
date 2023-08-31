import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {MdOutlineBed, MdOutlineBathtub,MdLocationOn, MdHomeFilled} from 'react-icons/md'
import './PropertyCard.css'

function PropertyCard({specificCity}) {
  const { city_name, total, response } = specificCity;
  const { clickedProperty, setClickedProperty} = useState('')

  const handleProperty = (_id) => {
    // Do something with the clicked city name
    
    console.log('Clicked city:', _id);
    setClickedProperty(_id);
  };

  return (
    <div className='property-card-container'>
{/* Display information for each property */}
{response &&
        response.map((property) => (
          <div key={property._id} className='property-card'>
            <img src={property.images[0]}/>
            <div className='rent-shower'>
              <div className='property-rent'>
                <h3>£{property.rent/4}</h3>
                <p>pppw including bills</p>
              </div>
              <div className='bed-bath'>
                <MdOutlineBed style={{ marginRight: '5px'}}/>
                <p style={{ marginRight: '30px' }}>{property.bedroom_count}</p>
                <MdOutlineBathtub style={{ marginRight: '5px' }}/>
                <p>{property.bathroom_count}</p>
              </div>
            </div>
            <div className='type-furnished'>
              <h3>Detached</h3>
              <h3>{property.furnished}</h3>
            </div>
            <div className='address'>
            <MdLocationOn style={{color:'rgba(58, 82, 149, 1)'}}/>
            <p>{property.address.street}, {property.address.city}, {property.address.postcode}</p>
            </div>
            <div className='view-home-button'>
            <Link to={`/properties/${property._id}`} style={{textDecoration: 'none'}}><p onClick={() => 
            handleProperty(property._id)}><MdHomeFilled/>View Home</p></Link>
          </div>
          </div>
           ))}
    </div>
  )
}

export default PropertyCard