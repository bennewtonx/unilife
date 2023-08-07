import './CityDetailsPage.css'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function CityDetailsPage({clickedCityName}) {

  const {cityId} = useParams()

  const [specificCity, setSpecficCity] = useState ([])

  useEffect(
    ()=>{
        //call API to get data
        axios.get(`${import.meta.env.VITE_APP_BASE_URL}properties/city/${cityId}`)
        .then(res => {
          setSpecficCity(res.data)
          console.log(`this`, res, cityId)
        })
        //have Data, need to store in state to display

        .catch((err => console.log(err)))
    }, [] //runs once when page loads
    
)

  return (
    <div className='city-details-page-container'>
      CityDetailsPagej
      </div>
  )
}

export default CityDetailsPage