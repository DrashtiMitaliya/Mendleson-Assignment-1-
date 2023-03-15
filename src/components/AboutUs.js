import React from 'react'
import about from "../Assets/images/AboutUs.svg"
import engagementIcon from "../Assets/images/Enagagement icon 1.svg"
import settingIcon from "../Assets/images/coomunication icon 1.svg"

import { Underline } from './Underline'

export const AboutUs = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-xxl-6  col-xl-12 col-lg-12 ">
                    <img className='aboutUs_img' src={about} alt="" />

                </div>
                <div className="col-xxl-6  col-xl-12 col-lg-12 text-sm-center text-md-center text-lg-center">
                    <div className="row">

                        <div className='text-start heading_container' >
                            <span className='heading mb-3 '>About Us</span>
                            <hr className='heading_underline mt-4'/>
                        </div>

                       

                        <div className='border-style '></div>
                        <p className='para-text'>We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.</p>
                    </div>
                    <div className="row text-start">
                        <div className="col">
                            <img className='mt-2' src={engagementIcon} alt="" />
                            <h3 className='engagement mt-4'>ENGAGEMENT</h3>
                            <p className='para-text'>We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.READ MORE</p>
                        </div>
                        <div className="col">

                            <img className='mt-2' src={settingIcon} alt="" />
                            <h3 className='communication mt-4'>COMMUNICATIONS</h3>
                            <p className='para-text'> We are award-winning leaders in communications and campaign management.READ MORE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
