import React from 'react'

import building1 from '../Assets/ProjectsImages/building1.svg'
import building2 from '../Assets/ProjectsImages/building2.svg'
import building3 from '../Assets/ProjectsImages/building3.svg'

export const OurProjects = () => {
  return (


    <div className='container div'>
         <div className='projects_container' >
                <p className='projects'>OUR PROJECTS</p>
                <hr className='projects_underline' />
            </div>
      <div className="row mt-5">

        <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-12 building1">
          <img src={building1} alt="" className='img1 w-100  ' />
          <div class="content">
            <div class="text">PROJECT'S  NAME</div>
          </div>
        </div>

        <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-12  ">
          <div className=' building2'>
            <img src={building2} alt="" className='img2 mb-4 w-100' />
            <div class="content">
              <div class="text">PROJECT'S NAME</div>
            </div>
          </div>

          <div className=' building3'>
            <img src={building3} alt="" className='img3  w-100' />
            <div class="content">
              <div class="text">PROJECT'S NAME</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
