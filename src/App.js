import React from 'react';
// import ReactAudioPlayer from 'react-audio-player'
import './App.css';
import tuneData from './tuneData'
import Header from './components/Header'
import Text from './components/Text'
import Tunesheet from './components/Tunesheet'
// import AudioElements from './components/AudioElements'
import {Howl, Howler} from 'howler'
import StarWars from './audio/Home/Special Breaks - Star Wars Extended.mp3'

// // src\audio\Home\Special Breaks - Star Wars Extended.mp3

const audioClips = [
  {sound: StarWars, label:'Star Wars break'}
]

class App extends React.Component {

  SoundPlay = (src) => {
    const sound = new Howl({
        src
      })
      sound.play()
}
  
RenderButtonAndSound = () => {
    return audioClips.map((soundObj,index) => {
      return(
        <div>
            <h2>{this.props.star}</h2>
            <button key={index} onClick={() => this.SoundPlay(soundObj.sound)}>
            {soundObj.label}
            </button>
        </div>
      )
    })
  }

  constructor() {
    super()
    this.state = {
        tuneData: tuneData,
        pageIndex: 0,
        audio: StarWars
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
    Howler.volume(1.0)
    const pageIndex = this.state.pageIndex
      return(
      <div >
        <Header key={this.state.tuneData.id}
                header={this.state.tuneData[pageIndex].title}
                data={this.state.tuneData}
                handleClick={this.handleClick}/>
        <Text key={this.state.tuneData.id}
              text={this.state.tuneData[pageIndex].text}/>
        <Tunesheet  key={this.state.tuneData.id}
                    src={this.state.tuneData[pageIndex].diagram}/>
        {/* <AudioElements star={this.state.audio}/> */}
        {this.RenderButtonAndSound()}
        {/* <AudioElements foo={this.state.audio}/> */}
      </div>
    )
  }
}

export default App;
