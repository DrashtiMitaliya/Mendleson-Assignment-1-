import React from 'react'

import { ServiceContent } from './ServiceContent'
import contents from '../components/ServiceData'



export const Services = () => {

    return (
        <div>
            <h2 className='heading mt-5'>Services </h2>
            <div id='services' className='container '>  {contents.map((data) => <ServiceContent {...data} />)}</div>
        </div>
    )
}
