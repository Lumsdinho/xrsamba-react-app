import React from 'react'

class Header extends React.Component {
    render() {

        const tuneButtons = this.props.data
        .filter(tune => tune.title !=='Brighton XR Samba')
        .map((tune,index) => <button key={tune.id} onClick={() => this.props.handleClick(index+1)}>{tune.title}</button>)

        return(
            <div>
                <nav>
                <h2>{this.props.header}</h2>
                <div>
                    <button key={this.props.data[0].id} onClick={() => this.props.handleClick(0)}>HOME</button>
                    {tuneButtons}
                </div>
                </nav>
            </div>
        )
    }
}

export default Header