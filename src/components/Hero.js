import React from 'react'
import asset31 from "../Assets/images/Asset 31.svg"
import asset32 from '../Assets/images/Asset 32.png'
import asset4 from "../Assets/images/Asset 4.svg"

export const Hero = () => {
  return (
    <>
      <div className="heroPart">
        <div className="heroPart_s1 ">
          <img src={asset32} alt=""  className='heroPart_s1_img32'/>
        </div>
        <div className="heroPart_s2">
          <div className="heroPart_s2_title">Mendleson Communication and Engagement</div>
          <div className="heroPart_s2_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed ipsum, ut quam volutpat, tortor.</div>
        </div>
        <div className="heroPart_s3">
          <img src={asset31} alt=""  className='heroPart_s3_img31'/>
          <img src={asset4} alt="" className='heroPart_s3_img4' />
        </div>
      </div>
    </>
  )


}
