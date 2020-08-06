import React from 'react'

function Tunesheet(props) {    

    const images = props.src.map((pic,index) => {
        return(
            <img
                src={pic}alt="drum diagram"
                key={pic[index]}                    
                style={tunesheetStyle}>    
            </img>
        )
    })

    return (
        <div>
            {images}
        </div>
    )
}

const tunesheetStyle = {
    maxWidth:"100%",
    border: ".2rem solid lightGrey"
}

export default Tunesheet