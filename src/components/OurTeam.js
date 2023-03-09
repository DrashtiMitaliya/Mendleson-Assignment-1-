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
            <Underline />
            <div className="row cardClass m-auto">
                <div className="col  col-sm-12  col-lg-4 ">
                    <Card className='border-0'>
                    <Card.Img src={person1}  />
                    <Card.Body>
                        <Card.Text className='text'>
                          Jessica D'suza
                        </Card.Text>

                    </Card.Body>
                </Card>
                </div>
                <div className="col  col-sm-12 col-lg-4 ">
                    <Card className='border-0' >
                    <Card.Img   src={person2} />
                    <Card.Body>
                      
                        <Card.Text className='text'>
                        Johny Williams
                        </Card.Text>

                    </Card.Body>
                </Card>
                </div>
                <div className="col  col-sm-12 col-lg-4">
                    <Card className='border-0' >
                    <Card.Img   src={person3} />
                    <Card.Body>
                 
                        <Card.Text className='text'>
                          Sanya R.
                        </Card.Text>

                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}
