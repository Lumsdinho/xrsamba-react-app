import React from 'react'

function Tunesheet(props) {

    const tunesheetStyle = {
        maxWidth:"100%",
        border: ".2rem solid lightGrey"
    }

    const images = props.src.map(pic => {
        return(
            <img src={pic}alt="drum diagram" 
                style={tunesheetStyle}>
            </img>
        )
    })

    console.log(images);
    return (
        <div>
            {/* <img src={image}alt="drum diagram" 
                 style={tunesheetStyle}>
            </img> */}
            {images}
        </div>
    )
}

export default Tunesheet