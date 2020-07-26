import React from 'react'

function Tunesheet(props) {

    const tunesheetStyle = {
        maxWidth:"100%",
        border: ".2rem solid lightGrey"
    }

    const image = props.src
    return (
        <div>
            <img src={image}alt="drum diagram" 
                 style={tunesheetStyle}>
            </img>
        </div>
    )
}

export default Tunesheet