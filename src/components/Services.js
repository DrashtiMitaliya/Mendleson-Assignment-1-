import React from 'react'

import { ServiceContent } from './ServiceContent'
import contents from '../components/ServiceData'




export const Services = () => {

    return (
        <div>
            <div className='  service_container' >
                <span className='service'>Services</span>
                <hr className='service_underline' />
            </div>

            <div id='services' className='container '>  {contents.map((data) => <ServiceContent {...data} />)}</div>
        </div>
    )
}
