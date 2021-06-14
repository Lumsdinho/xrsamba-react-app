import React, { useEffect, useState } from 'react';
import './App.css';
import tuneDataImport from './tuneData'
import Header from './components/Header'
import Text from './components/Text'
import Tunesheet from './components/Tunesheet'
import AudioElements from './components/AudioElements'
import { client } from './config/contentfulClient'

const App = () => {

  const [tuneData] = useState(tuneDataImport)
  const [pageIndex, setPageIndex] = useState(0)
  const [repertoire, setRepertoire] = useState({})

  const handleClick = (index) => {
    setPageIndex(index)
  }

  useEffect(() => {
    client.getEntries()
      .then(entries => {
        setRepertoire(entries.items[0].fields)
      })
  })

  // client.getEntries().then(entries => {
  //   entries.items.forEach(entry => {
  //     if(entry.fields) {
  //       console.log(entry.fields)
  //     }
  //   })
  // })

  return (      
    <div className="container">

      <Header header={tuneData[pageIndex].title}
              data={tuneData}
              handleClick={handleClick}/>

      <Text text={tuneData[pageIndex].text}
      />

      <Tunesheet  src={tuneData[pageIndex].diagram}
      />

      <AudioElements  tuneData={tuneData}
                      pageIndex={pageIndex}/>

      <div className="container" style={{
        backgroundColor:"white",
        border:"solid .2rem #FE82CB",
        borderRadius:"2%",
        marginBottom:".5rem"
      }}>
        <h1>{repertoire.title}</h1>
        <h4>{repertoire.description}</h4>
        <p>{repertoire.content}</p>        
      </div>                
    </div>
  )
}

export default App