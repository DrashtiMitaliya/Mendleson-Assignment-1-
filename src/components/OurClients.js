import React from 'react'
import { Underline } from './Underline'
import client1 from '../Assets/logos/Layer 19.svg'
import client2 from '../Assets/logos/Layer 20.svg'
import client3 from '../Assets/logos/Layer 21.svg'
import client4 from '../Assets/logos/Layer 22.svg'
import client5 from '../Assets/logos/Layer 23.svg'
import client6 from '../Assets/logos/Layer 24.svg'
import client7 from '../Assets/logos/Layer 25.svg'
import client8 from '../Assets/logos/Layer 26.svg'
import client9 from '../Assets/logos/Layer 27.svg'

export const OurClients = () => {
  return (
    <div className='container  mt-5'>
        <div className='  clients_container' >
                <span className='clients'>OUR CLIENTS</span>
                <hr className='clients_underline' />
            </div>
    
      <div className='allLogo'>
        <div>
          <img src={client1} alt="" className='logos p-4'  />
          <img src={client2} alt="" className='logos  p-4' /> 
            <img src={client3} alt="" className='logos p-4' />
          <img src={client4} alt="" className='logos p-4' />
          <img src={client5} alt="" className='logos p-4' />
          <img src={client6} alt="" className='logos p-4' />
        <img src={client7} alt="" className='logos p-4' />
        <img src={client8} alt="" className='logos p-4' />
        <img src={client9} alt="" className='logos p-4' /> 

        </div>
    
      </div>

    </div>
  )
}
