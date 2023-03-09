import React from 'react'
import facebook from "../Assets/ContactUsImgs/facebook 1.svg";
import linkedin from "../Assets/ContactUsImgs/linkedin 1.svg";
import search from "../Assets/ContactUsImgs/search 1.svg";

export const ContactUs = () => {
    return (
        <div className='container contactUs'>
            <div className="row  p-3">
                <div className="col-xl-2  col-md-6">
                    <span className='header'>Social</span>
                    <div >
                        <p> <img src={facebook} alt="" />Facebook</p>
                        <p> <img src={linkedin} alt="" /> LinkedIn</p>
                        <p><img src={search} alt="" />Search</p>
                    </div>
                </div>
                <div className="col-xl-2 col-md-6 ">
                    <span className='header'>Explore</span>
                    <p>Services</p>
                    <p>Team</p>
                    <p>Clients</p>
                </div>
                <div className="col-xl-4 col-md-6 ">
                    <span className='header'>Contacts</span>
                    <p>Lorem ipsum dolor sit.
                    </p>
                    <p>Used for Display</p>
                    <p>1234567890</p>
                </div>
                <div className="col-xl-4 col-md-6 ">
                    <span className='header'>Email</span>
                    <p>mendlesoncommunication@email.com</p>
                </div>
            </div>
        </div>
    )
}
