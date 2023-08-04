import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import KeepInTouch from '../../Components/KeepInTouch/KeepInTouch';
import './SeeAllCitiesPage.css';

function SeeAllCitiesPage() {
  const [seeAllCities, setSeeAllCities] = useState([]);
  const [mounted, setMounted] = useState(true); // Flag to track component mount status

  useEffect(() => {
    const fetchAllCities = async () => {
      try {
        let page = 1;
        let allCities = [];

        while (true) {
          const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}cities`, {
            params: {
              page,
            },
          });

          const cities = response.data.response;

          if (cities.length === 0) {
            break; // No more pages, break the loop
          }

          allCities = [...allCities, ...cities];
          page++;
        }

        if (mounted) {
          setSeeAllCities(allCities);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllCities();

    return () => {
      // Cleanup function to set the mounted flag to false on component unmount
      setMounted(false);
    };
  }, [mounted]);

  return (
    <div className='see-all-cities-page-container'>
      <Header />
      <Banner />
      <h1>Search by city</h1>
      <div className='cities-grid'>
        {seeAllCities.map((city, index) => (
          <div className='city-grid-card' key={index}>
            <h3>{city.name}</h3>
          </div>
        ))}
      </div>
      <KeepInTouch />
      <Footer />
    </div>
  );
}

export default SeeAllCitiesPage;
