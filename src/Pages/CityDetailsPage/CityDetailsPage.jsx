import './CityDetailsPage.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Banner from '../../Components/Banner/Banner';
import BannerSearch from '../../Components/Banner/BannerSearch';
import Header from '../../Components/Header/Header';
import PropertyCard from '../../Components/PropertyCard/PropertyCard';
import KeepInTouch from '../../Components/KeepInTouch/KeepInTouch';
import Footer from '../../Components/Footer/Footer';

function CityDetailsPage({ clickedCityName }) {
  const { cityId } = useParams();
  const [specificCity, setSpecificCity] = useState([]);
  const [studentLife, setStudentLife] = useState('');

  const [selectedBedroom, setSelectedBedroom] = useState('0');
  const [selectedBathroom, setSelectedBathroom] = useState('0');
  const [selectedPrice, setSelectedPrice] = useState('0');
  const [selectedHomeType, setSelectedHomeType] = useState('0');
  const [filters, setFilters] = useState({
    query : {
    city_id : cityId,
    bedroom_count: selectedBedroom,
    bathroom_count: selectedBathroom,
    rent: selectedPrice,
    property_type: selectedHomeType,
    },
  });

  useEffect(() => {
    // Call API to get data
    axios.get(`${import.meta.env.VITE_APP_BASE_URL}properties/city/${cityId}`)
      .then((res) => {
        setSpecificCity(res.data);
      })
      .catch((err) => console.log(err));

    axios.get(`${import.meta.env.VITE_APP_BASE_URL}cities/${cityId}`)
      .then((res) => {
        setStudentLife(res.data.data[0]);
      })
      .catch((err) => console.log(err));
  }, [cityId]);

  useEffect(() => {
    // This will run whenever any of the filter values change
    fetchFilters();
  }, [filters]); // Include filters in the dependency array

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const fetchFilters = async () => {
    try {
      // Use the 'filters' state to make the API request
      const res = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}properties/filter`, filters);
      console.log(res.data);
      // Update specificCity with filtered data
      setSpecificCity(res.data);
      console.log('is this working????')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='city-details-page-container'>
      <Header />
      <Banner page='properties/city/' />
      {/* Pass the updateFilters function to BannerSearch */}
      <BannerSearch page='properties/city/' filters={filters} updateFilters={updateFilters}
              selectedBedroom={selectedBedroom}
              selectedBathroom={selectedBathroom}
              selectedPrice={selectedPrice}
              selectedHomeType={selectedHomeType} />
      <div className='number-of-homes'>
        <h1 style={{ marginLeft: '80px', marginBottom: '-10px' }}>{specificCity.total} homes in {specificCity.city_name}</h1>
      </div>
      <div className='property-container'>
        <PropertyCard specificCity={specificCity} />
      </div>
      <div className='student-in-city-container'>
        <div className='student-in-city'>
          <div className='student-in-city-text'>
            <h2>Being a student in {specificCity.city_name}</h2>
            <p>{studentLife.student_life}</p>
            <p>{studentLife.universities}</p>
          </div>
          <div className='student-in-city-image'>
            <img src={studentLife.image_url} alt="Student Life" />
          </div>
        </div>
      </div>
      <KeepInTouch />
      <Footer />
    </div>
  );
}

export default CityDetailsPage;
