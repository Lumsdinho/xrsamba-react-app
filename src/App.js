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

        <div className="container" style={{
          backgroundColor:"white",
          border:"solid .2rem #FE82CB",
          borderRadius:"2%",
          marginBottom:".5rem"
        }}>
          <h2 style={{
            textAlign:"center"
          }}>Tunes/Breaks</h2>
          <p><u>Section 1 - Our Main Focus, songs that we should have totally drilled by Aug XR rebellion</u></p>
          <p><strong>Funk</strong>
            <ul>
              <li>Break 1</li>
            </ul>
          </p>
          <p><strong>Karla</strong>
            <ul>
              <li>Break 1 (gun break)</li>
              <li>Half gun drum roll</li>
              <li>Break 2</li>
              <li>Break 2 inverted</li>
            </ul>            
          </p>
          <p><strong>Hedgehog</strong>
            <ul>
              <li>Break 1</li>
            </ul>                       
          </p>
          <p><strong>Samba Reggae</strong>
            <ul>
              <li>Sheffield intro</li>
              <li>Bra break</li>
              <li>Break 1</li>
              <li><em>Break 2</em></li>
              <li><em>Break 3</em></li>
            </ul>                       
          </p>
          <p><strong>Misc</strong>
            <ul>
              <li>4 beat</li>
              <li>8 beat</li>
              <li>4 Rest +/- One instrument plays on</li>
              <li>8 Rest +/- One instrument plays on</li>
              <li>Bra Break - N.B. ‘call’ needs to be standardised - we all need to look at ROR and follow that please</li>
              <li>Knock on the Door Break - N.B. make sure this is done once or multiple times depending on what you signal</li>
              <li>Bunny break</li>
              <li>Single out instruments</li>
              <li>Single instrument drum rolls</li>
              <li>Snares playing tune on rims</li>
              <li>XR break</li>
              <li>Time is running out break</li>
              <li>Clave break</li>
              <li>Coffee and cookies break</li>
            </ul>                       
          </p>
          <p><u>Section 2 - In addition these would be great:</u></p>
          <p><strong>Afoxe</strong>
            <ul>
              <li>Break 1</li>
              <li>Bra break</li>
              <li>Tamborim stroke</li>
            </ul>                       
          </p>
          <p><strong>Drum & Bass</strong>
            <ul>
              <li>Break 1 (dance break)</li>
              <li>Break 2</li>
              <li>Break 3</li>
              <li>Hip-hop break</li>
            </ul>                       
          </p>
          <p><strong>Misc</strong>
            <ul>
              <li>Eurotrash break</li>
              <li>Scottish tune</li>
              <li>Crazy Monkey</li>
              <li>ER break 1 & 2</li>
            </ul>                       
          </p>
        </div>                
      </div>
    )
  }
}

export default App;
