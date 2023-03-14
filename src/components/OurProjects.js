import React from 'react'

import building1 from '../Assets/ProjectsImages/building1.svg'
import building2 from '../Assets/ProjectsImages/building2.svg'
import building3 from '../Assets/ProjectsImages/building3.svg'

export const OurProjects = () => {
  return (
   
      
      <div className='container div'>
        <h2 className="heading mb-5 mt-5 ">OUR PROJECTS</h2>
      <div className="row building1">

        <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-12">
          <img src={building1} alt=""   className='img1 mb-4 w-100'/>
          <div class="content">
              <div class="text">PROJECT'S NAME</div>
           </div>
        </div>

        <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-12  building2">
       <div className=' building2'>
       <img src={building2} alt=""   className='img2 mb-4 w-100'/>
         <div class="content">
              <div class="text">PROJECT'S NAME</div>
         </div>
       </div>

      <div className=' building2'>
      <img src={building3} alt=""  className='img3 w-100' />
        <div class="content">
              <div class="text">PROJECT'S NAME</div>
            </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}
