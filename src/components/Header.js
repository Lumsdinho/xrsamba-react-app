import React from 'react'

function Header(props) {

    const navStyle = {
        fontSize: '.8rem'
    }

    const headerStyle = {
        fontFamily: 'anton',
        color: 'white',
        borderTop: 'solid white 1px',
        borderBottom: 'solid white 1px',
        marginTop: '.5rem',
        padding: '.1em 0 .1em 0',
        // fontSize: '10vw',
        fontSize: "clamp(2rem, 5vw, 4rem)",
        minSize: "200px",
        textAlign: "center"
    }
    
    const tuneButtons = props.data
        .filter(tune => tune.title !=='BRIGHTON XR SAMBA')
        .map((tune,index) => 
        <button 
            className="tuneButton"
            key={tune.id}             
            onClick={() => props.handleClick(index+1)}
            >{tune.title}        
        </button>)

    return(
        <div>
            <nav style={navStyle}>
                <h2 style={headerStyle}>{props.header}</h2>
                <div>
                    <button className="tuneButton" key={props.data[0].id} onClick={() => props.handleClick(0)}>HOME</button>
                    {tuneButtons}
                </div>
            </nav>
        </div>
    )   
}

export default Header