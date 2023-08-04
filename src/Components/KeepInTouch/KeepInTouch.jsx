import './KeepInTouch.css'
import React from 'react'
import {BiLogoFacebookCircle, BiLogoTwitter, BiLogoInstagramAlt} from 'react-icons/bi'

function KeepInTouch() {
  return (
    <div className='keep-in-touch-container'>
        <div className='keep-in-touch'>
        <h1>Keep in touch</h1>
        <p>Curious about new offerings? Sign up for our 
            weekly newsletter and stay informed.</p>
        <input type='text' placeholder='Your email'/>
        </div>
        <div className='lets-socialize'>
        <h1>Lets socialize</h1>
        <div className='social-icon'>
          <BiLogoFacebookCircle size={29} color={"#FFFFFF"}/>
          <p>Facebook</p>
        </div>
        <div className='social-icon'>
          <BiLogoTwitter size={29} color={"#FFFFFF"}/>
          <p>Twitter</p>
        </div>
        <div className='social-icon'>
          <BiLogoInstagramAlt size={29} color={"#FFFFFF"}/>
          <p>Instagram</p>
        </div>
        </div>
    </div>
  )
}

export default KeepInTouch