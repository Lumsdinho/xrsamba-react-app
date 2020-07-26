import React from 'react';
import './App.css';
import tuneData from './tuneData'
import Header from './components/Header'
import Text from './components/Text'
import Tunesheet from './components/Tunesheet'
import AudioElements from './components/AudioElements'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
        tuneData: tuneData,
        pageIndex: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

handleClick = (index) => this.setState(
  {
    tuneData: tuneData,
    pageIndex: index
  }
)

render() {
    const pageIndex = this.state.pageIndex
      return(
      <div className="container">
        <Header key={this.state.tuneData.id}
                header={this.state.tuneData[pageIndex].title}
                data={this.state.tuneData}
                handleClick={this.handleClick}/>
        <Text key={this.state.tuneData.id}
              text={this.state.tuneData[pageIndex].text}/>
        <Tunesheet  key={this.state.tuneData.id}
                    src={this.state.tuneData[pageIndex].diagram}/>
        <AudioElements  tuneData={this.state.tuneData}
                        pageIndex={this.state.pageIndex}/>
      </div>
    )
  }
}

export default App;
