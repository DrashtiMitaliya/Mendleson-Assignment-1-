import React from 'react'

import { ServiceContent } from './ServiceContent'
import contents from '../components/ServiceData'
import { Underline } from './Underline'



export const Services = () => {

    return (
        <div>
            <h2 className='heading mt-5'>Services </h2>
            <Underline />
            <div id='services' className='container '>  {contents.map((data) => <ServiceContent {...data} />)}</div>
        </div>
    )
}
