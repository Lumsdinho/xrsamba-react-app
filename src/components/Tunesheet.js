import React from 'react'

class Tunesheet extends React.Component {
    render() {
        const image = this.props.src
        return(
            <div>
                <img src={image}alt="drum diagram"></img>
            </div>
        )
    }
}

export default Tunesheet