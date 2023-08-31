import React, { useState } from 'react';
import { MdOutlineHolidayVillage, MdOutlineFavoriteBorder, MdMailOutline, MdPostAdd } from 'react-icons/md';
import Modal from 'react-modal';
import './Header.css'; // Import your CSS file

Modal.setAppElement(document.getElementById('root'));

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: '20%',
      bottom: '1%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '714px',
      width: '936px',
      borderRadius: '24px'
    },
    overlay: {
      backgroundColor: 'rgba(1, 0, 0, 0.5)',
    },
  };

  return (
    <div className='header-container'>
      <div className='icon-logo'>
        <MdOutlineHolidayVillage />
        <a href={'/'}>UniLife</a>
      </div>
      <div className='header-buttons'>
        <a><MdOutlineFavoriteBorder/> Shortlist</a>
        <a onClick={() => setIsOpen(true)}><MdMailOutline/> Contact Us</a>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Contact Us Modal"
      >
        <div className='contact-us-modal-container'>
        <div className='contact-us-modal-title-container'>
          <div className='contact-us-modal-title'>
          <h2 style={{fontWeight: '500', fontSize: '36px'}}>Contact Us</h2>
          <p style={{width: '485px', lineHeight: '32px'}}>Feel free to contact us if you have any questions. Looking forward to hear from you.</p>
          </div>
          <div>
            <MdPostAdd style={{fontSize: '70px', color: 'rgba(58, 82, 149, 1)'}}/>
          </div>
          </div>
          <div className='contact-us-modal-input-left'>
          <div className='contact-us-modal-input'>
            <h2 style={{fontWeight: '500'}}>Name</h2>
            <input type='text' placeholder='Enter your name'/>
          </div>
          <div className='contact-us-modal-input'>
          <h2 style={{fontWeight: '500'}}>Phone Number</h2>
            <input type='text' placeholder='Enter your phone number'/>
          </div>
          <div className='contact-us-modal-input'>
          <h2 style={{fontWeight: '500'}}>Are you a...</h2>
            <input type='dropdown' placeholder=''/>
          </div>
          </div>
          <div className='contact-us-modal-input-right'>
          <div className='contact-us-modal-input'>
          <h2 style={{fontWeight: '500'}}>Email</h2>
            <input type='text' placeholder='Enter your email address'/>
          </div>
          <div className='contact-us-modal-input'
          style={{height: '232px'}}>
          <h2 style={{fontWeight: '500'}}>Message</h2>
            <input type='text' placeholder='Enter your message'
            style={{height: '184px'}}/>
          </div>
          <button className='modal-close-btn' onClick={() => setIsOpen(false)}
          style={{height: '56px', width: '400px', backgroundColor: 'rgba(58, 82, 149, 1)',
          borderRadius: '12px', color: '#FFFFFF', fontSize: '20px', border: 'none', margin: '0 20px'}}>Close</button>
          </div>
          </div>
      </Modal>
    </div>
  );
}

export default Header;
