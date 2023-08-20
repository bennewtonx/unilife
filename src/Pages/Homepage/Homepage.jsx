import './Homepage.css'
import React from 'react'
import Header from './../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import SeeAllCities from '../../Components/SeeAllCities/SeeAllCities';
import Compare from '../../Components/Compare/Compare';
import Footer from '../../Components/Footer/Footer';
import KeepInTouch from '../../Components/KeepInTouch/KeepInTouch';
import BannerSearch from '../../Components/Banner/BannerSearch';

function Homepage() {
  return (
    <div>
        <Header/>
        <Banner page='home'/>
        <BannerSearch page='home'/>
        <SeeAllCities/>
        <Compare />
        <KeepInTouch />
        <Footer />
        

    </div>
  )
}

export default Homepage