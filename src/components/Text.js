import React from 'react'

class Text extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Text