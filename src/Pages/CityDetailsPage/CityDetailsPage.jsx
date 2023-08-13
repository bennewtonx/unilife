import './CityDetailsPage.css'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Banner from '../../Components/Banner/Banner'
import BannerSearch from '../../Components/Banner/BannerSearch'
import Header from '../../Components/Header/Header'

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
      <Header />
      <Banner page='properties/city/'/>
      <BannerSearch/>
      <h1>{specificCity.total} homes in {specificCity.city_name}</h1>
      </div>
  )
}

export default CityDetailsPage