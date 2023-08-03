import './Compare.css'
import React from 'react'
import {MdTravelExplore, MdOutlineChecklistRtl, MdOutlineReceiptLong, MdHeight} from 'react-icons/md'

function Compare() {
  return (
    <div className='compare-container'>
    <div className='compare-student-homes'>
        <h2>Compare all inclusive student homes.</h2>
        <div className='compare-search'>
            <MdTravelExplore size={94} color={"#3A5295"}/>
            <h2>Search</h2>
            <p>Find your dream home in the perfect area
                near your university.</p>
        </div>
        <div className='compare-compare'>
            <MdOutlineChecklistRtl size={94} color={"#3A5295"}/>
            <h2>Compare</h2>
            <p>Compare student accomodation to find the
                right home for you.</p>
        </div>
        <div className='compare-bills'>
            <MdOutlineReceiptLong size={94} color={"#3A5295"}/>
            <h2>Bills included</h2>
            <p>Bills are included in all rent prices.
                No hidden fees.</p>
        </div>
    </div>
    <div className='select-compare-container'>
        <div className='select-compare'>
            <div className='best-selection'>
                <div>
                <MdOutlineReceiptLong size={64}/>
                </div>
                <h2>Best selection</h2>
                <p>Best selection of student accomodations.
                    Never been easier to find a home that's right
                    for you</p>
            </div>
            <div className='your-favorite'>
            <MdOutlineReceiptLong size={64}/>
                <h2>Your favorite</h2>
                <p>Shortlist your favorite properties and send
                    enquiries in one click.</p>
            </div>
            <div>
            <button>Search & Compare</button>
            </div>
            </div>
        <div className='compare-image-container'>
        <img src="src\assets\Images\London-Skylineshutterstock_1047408736.jpg"/>
        </div>

    </div>
    </div>
  )
}

export default Compare