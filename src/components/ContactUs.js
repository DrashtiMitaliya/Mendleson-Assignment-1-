import React from 'react'
import facebook from "../Assets/ContactUsImgs/facebook 1.svg";
import linkedin from "../Assets/ContactUsImgs/linkedin 1.svg";
import search from "../Assets/ContactUsImgs/search 1.svg";

export const ContactUs = () => {
    return (
        <div className='container contactUs'>
            <div className="row  p-3 m-auto">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12  ">
                 
                    <div className=' text-xl-start text-lg-start m-auto m-sm-auto text-sm-center' >
                    <span className='header '>Social</span>
                        <p> <img src={facebook} alt="" />Facebook</p>
                        <p> <img src={linkedin} alt="" /> LinkedIn</p>
                        <p><img src={search} alt="" />Search</p>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 text-xl-start m-auto  text-sm-center">
                    <span className='header'>Explore</span>
                    <p>Services</p>
                    <p>Team</p>
                    <p>Clients</p>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 text-xl-start m-auto text-sm-center">
                    <span className='header '>Contacts</span>
                    <p>Lorem ipsum dolor sit.
                    </p>
                    <p>Used for Display</p>
                    <p>1234567890</p>
                </div>
                <div className="col-xl-3 col-md-6 text-start mx-auto  text-xl-start text-sm-center">
                    <span className='header'>Email</span>
                    <p>mendlesoncommunication@email.com</p>
                </div>
            </div>
        </div>
    )
}
