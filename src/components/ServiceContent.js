import React from 'react'


export const ServiceContent = ({ headingName, description, order, img }) => {
    return (
        < div className='container '>

            <div className='row mb-5 m-auto  servicesDiv'>
                {order ?
                    <>
                        <div className="col  order-xl-1  text-para m-auto  col-md-12  order-md-2 order-sm-2 col-lg-6 order-lg-1">
                            <h2 className=' customClass text-xl-end end text-lg-end text-md-center  text-sm-center ' >{headingName}</h2>
                            <p className=' customClass  text-xl-end end text-lg-end text-md-center  text-sm-center '>{description}</p>
                        </div>
                        <div className="col  order-xl-2  col-md-12 order-md-1 order-sm-1 col-lg-6 order-lg-2" >
                            <div><img src={img} alt="" className='imgsOfServices' />
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="col  order-xl-1 col-md-12  order-md-1 order-sm-1 col-lg-7 order-lg-1" >
                            <div><img src={img} alt=""  className='imgsOfServices'/>
                            </div>
                        </div>
                        <div className="col div order-xl-2 para-text  m-auto col-md-12     order-md-2 order-sm-2 col-lg-5 order-lg-2   ">
                            <h2 className=" customClass  text-xl-start text-lg-start text-md-center  text-sm-center div"> {headingName}</h2>
                            <p className=" customClass  text-xl-start text-lg-start text-md-center  text-sm-center div">{description}</p>
                        </div>

                    </>

                }



            </div>
        </div>
    )
}
