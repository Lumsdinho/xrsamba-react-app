import React from 'react'
import { useSpring, animated } from 'react-spring'

function Header(props) {
       
    const tuneButtons = props.data
        .filter(tune => tune.title !=='BRIGHTON XR SAMBA')
        .map((tune,index) => 
        <button 
            className="tuneButton"
            key={tune.id}             
            onClick={() => props.handleClick(index+1)}
            >{tune.title}        
        </button>)

    const fadeIn = useSpring({
        opacity: 1,
        from: {opacity:0},
        config:{duration:2000}
    })

    return(
        <div>
            <nav style={navStyle}>               

                <animated.div style={fadeIn}>
                    <h2 style={headerStyle}>{props.header}</h2>
                </animated.div>
                
                <div>
                    <button 
                        className="tuneButton" 
                        key={props.data[0].id} 
                        onClick={() => props.handleClick(0)}
                    >HOME
                    </button>
                    {tuneButtons}
                </div>

            </nav>
        </div>
    )   
}

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

export default Header