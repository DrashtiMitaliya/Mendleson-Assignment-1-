import React from 'react'
import asset1 from "../Assets/images/Asset 1.svg"
import asset2 from "../Assets/images/Asset 2.svg"

import asset51 from "../Assets/images/Asset 5 1.svg"
import asset52 from "../Assets/images/Asset 5 2.svg"
import asset61 from "../Assets/images/Asset 6 1.svg"
import asset71 from "../Assets/images/Asset 7 1.svg"
// import asset82 from "../Assets/images/Asset 8 2.svg"
export const Scaller = () => {
  return (
    <div>

      <img className='asset1' src={asset1} alt="" />
      <img className='asset2' src={asset2} alt="" />
      <img className='asset51' src={asset51} alt="" />
      <img className='asset52' src={asset52} alt="" />
      <img className='asset61' src={asset61} alt="" />
      <img className='asset71' src={asset71} alt="" />
      {/* <img className='asset82' src={asset82} alt="" /> */}

    </div>
  )
}
