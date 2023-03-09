import React from 'react'
import { Underline } from './Underline'
import building1 from '../Assets/ProjectsImages/Building1.jpeg'
import building2 from '../Assets/ProjectsImages/building2.svg'
import building3 from '../Assets/ProjectsImages/building3.svg'

export const OurProjects = () => {
  return (
    <div className='container div'>
      <h2 className="heading mb-5 mt-5">OUR PROJECTS</h2>
      <Underline />
      <div className="row m-5  ">
        <div className="col-xxl-6 col-xl-12 col-lg-12    ">
          <div className='row building1 '>
            <img src={building1} alt="" className='img1' />
            <div class="content">
              <div class="text">Projects Name</div>
            </div>
          </div>
        </div>
        <div className=" col-xxl-6 col-xl-12 col-lg-12  ">

          <div className="row mb-3 building2  ">
            <img src={building2} alt="" className='img2' />
            <div class="content">
              <div class="text">Projects Name</div>
            </div>
          </div>

          <div className="row  mt-3   building3 ">
            <img src={building3} alt="" className='img3' />
            <div class="content">
              <div class="text">Projects Name</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
