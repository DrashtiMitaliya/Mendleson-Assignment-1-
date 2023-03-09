import React from 'react'

export const Underline = () => {
    const myStyle1 = {
        background: "#A9A9A9",
        borderRadius: "4px",
        width: "156px",
        height: "7px",
    }
    const myStyle2 = {
       border: "1px solid #A9A9A9",
        width: "238px",
        height: "0px",

    }
    return (
        <div className='mainDiv' >
            <div className='module1' style={myStyle1} ></div>
            <div className='module2' style={myStyle2}> </div>
        </div>

    )
}

