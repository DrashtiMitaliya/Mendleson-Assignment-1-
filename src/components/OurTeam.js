import React from 'react'
import { Underline } from './Underline';
import Card from 'react-bootstrap/Card';
import person1 from '../Assets/Team Members/Person 1 img 1.svg'
import person2 from '../Assets/Team Members/Person 2 img 1.svg'
import person3 from '../Assets/Team Members/Person 3 img 1.svg'

export const OurTeam = () => {
    return (
        <div className='container'>
            <h2 className='heading'>OUR TEAM</h2>
    
            <div className="row cardClass m-auto mt-5">
                <div className="col  col-sm-12  col-lg-4 ">
                    <Card className='border-0 '>
                   <div className='w-75 m-auto'> <Card.Img src={person1}   /></div>
                    <Card.Body>
                        <Card.Text className='text mt-4'>
                          Jessica D'suza
                        </Card.Text>

                    </Card.Body>
                </Card>
                </div>
                <div className="col  col-sm-12 col-lg-4 ">
                    <Card className='border-0' >
                    <div className='w-75 m-auto'> <Card.Img src={person2}   /></div>
                    <Card.Body>
                      
                        <Card.Text className='text mt-4'>
                        Johny Williams
                        </Card.Text>

                    </Card.Body>
                </Card>
                </div>
                <div className="col  col-sm-12 col-lg-4">
                    <Card className='border-0' >
                    <div className='w-75 m-auto'> <Card.Img src={person3}   /></div>
                    <Card.Body>
                 
                        <Card.Text className='text mt-4'>
                          Sanya R.
                        </Card.Text>

                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}
