import './HomeDetailsPage.css';
import React, { useEffect, useState } from 'react';
import { MdOutlineBed, MdOutlineBathtub, MdCheck } from 'react-icons/md';
import { IoMdHeartEmpty } from 'react-icons/io';
import Modal from 'react-modal';
import { useParams, Link } from 'react-router-dom';
import Header from './../../Components/Header/Header';
import KeepInTouch from './../../Components/KeepInTouch/KeepInTouch';
import Footer from './../../Components/Footer/Footer';
import axios from 'axios';

function HomeDetailsPage({ clickedCityName }) {
  const [isOpen, setIsOpen] = useState(false);
  const { cityId, propertyId } = useParams();
  const [property, setProperty] = useState([]);
  const [specificCity, setSpecificCity] = useState([]);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: '20%',
      bottom: '1%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '634px',
      width: '936px',
      borderRadius: '24px',
    },
    overlay: {
      backgroundColor: 'rgba(1, 0, 0, 0.5)',
    },
  };

  useEffect(() => {
    // Call API to get property data
    axios
      .get(`${import.meta.env.VITE_APP_BASE_URL}properties/${propertyId}`)
      .then((res) => {
        setProperty(res.data);
      })
      .catch((err) => console.log(err));
  }, [propertyId]);

  return (
    <div className='home-details-container'>
      <Header />
      {property && property.images && (
        <div className='property-details' key={property._id}>
          <div className='property-images-container'>
            <Link
              to={`properties/city/${specificCity.cityId}`}
              style={{ display: 'block', textAlign: 'left' }}
            >
              <button>&lt;&nbsp;Back to search</button>
            </Link>
            <div className='property-main-image'>
              <img src={property.images[0]} alt='Main Property' />
            </div>
            {/* Rest of the property images */}
          </div>
          <div className='property-info-container'>
            <div className='property-info'>
              <div className='property-address'>
                {/* Property address */}
              </div>
              <div className='property-price'>
                {/* Property price */}
              </div>
              {/* Rest of the property info */}
            </div>
            <div className='property-buttons'>
              {/* Property buttons */}
            </div>
            <Modal
              isOpen={isOpen}
              onRequestClose={() => setIsOpen(false)}
              style={customStyles}
              contentLabel='Contact Us Modal'
            >
              {/* Modal content */}
            </Modal>
          </div>
          <div className='home-description-bedrooms-container'>
            <div className='description'>
              {/* Description */}
              <div className='key-features-container'>
                <h1>Key Features</h1>
                {/* Key features */}
              </div>
            </div>
            <div className='bedroom-prices-container'>
              <h1>Bedroom Prices</h1>
              {/* Bedroom prices */}
            </div>
          </div>
          <div className='blank-div'></div>
        </div>
      )}
      <KeepInTouch />
      <Footer />
    </div>
  );
}

export default HomeDetailsPage;
