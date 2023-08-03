import './Homepage.css'
import React from 'react'
import Header from './../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import SeeAllCities from '../../Components/SeeAllCities/SeeAllCities';
import Compare from '../../Components/Compare/Compare';

function Homepage() {
  return (
    <div>
        <Header />
        <Banner />
        <SeeAllCities />
        <Compare />
        

    </div>
  )
}

export default Homepage