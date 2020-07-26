import React from 'react'

function Text(props) {

    const textStyle = {
        // maxWidth:"95%",
        margin:"1rem 0 1rem 0",
        padding:".5rem 0 .5rem 0",
        fontFamily: 'bitter',
        color: 'white',
        borderTop:'white solid .6rem',
        borderBottom:'white solid .6rem',
        fontSize: ".8rem"
    }

    return (
        <div>
            <p style={textStyle}>{props.text}</p>
        </div>
    )
}

export default Text