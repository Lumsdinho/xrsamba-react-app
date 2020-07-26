// import Star from 'Special Breaks - Star Wars Extended.mp3'
import React from 'react'

function AudioElements(props) {

  const containerStyle = {
  color: "var(--clr-text)",
  fontWeight: "bold",
  fontFamily: 'bitter',
  fontSize:"1.5rem",
  // outline: "red dotted 2px",
  display:"flex",
  flexWrap:"wrap",
  justifyContent:"spaceBetween",
  maxWidth:"100%" ,
  margin:"1rem 0 1rem 0" 
  }

  const mp3containerStyle = {
    fontFamily: 'bitter',
    color: 'white',
    // border: ".2rem solid grey",
    width: "10rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "spaceBetween",
    textAlign:"center",
    margin: ".2rem .6rem .2rem .6rem",
    color:"black",
    backgroundColor:"white",
    border:"solid .2rem #FE82CB",
    borderRadius:"8%"
  }

  const mp3NameStyle = {
    fontSize: "clamp(.6rem, 2vw, 1rem)",
  }

  const mp3Style = {
    maxWidth: "8rem"
  }

  const samples = props.tuneData[props.pageIndex].samples
  const mp3Elements = samples.map((element,index) =>

    <div sm={4} style={mp3containerStyle}>
      <h3 style={mp3NameStyle}>
        {element.title}
      </h3>
      <audio loop controls 
        key={index + 1} 
        style={mp3Style}>
        <source src={element.link} 
        type="audio/mp3"/>
      </audio>
    </div>

    )

  return (
    <div>
      <row style={containerStyle}>      
        {mp3Elements}
      </row>
    </div>
    
  )
}

export default AudioElements