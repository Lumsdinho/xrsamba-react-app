import React, { useEffect, useState } from 'react';
import './App.css';
import tuneDataImport from './tuneData'
import Header from './components/Header'
import Text from './components/Text'
import Tunesheet from './components/Tunesheet'
import AudioElements from './components/AudioElements'
import Repertoire from './components/Repertoire'


const App = () => {

  const [tuneData] = useState(tuneDataImport)
  const [pageIndex, setPageIndex] = useState(0)
  // const [repertoire, setRepertoire] = useState({})  

  const handleClick = (index) => {
    setPageIndex(index)
  } 

  // useEffect(() => {
  //   console.log(marked(content))
  // },[title, description, content])

  // client.getEntries().then(entries => {
  //   entries.items.forEach(entry => {
  //     if(entry.fields) {
  //       console.log(entry.fields)
  //     }
  //   })
  // })

  // const itemTitle = marked(repertoire.title)
  // const itemTitle = repertoire.title
  // const itemDescription = marked(repertoire.description)
  // const itemContent = marked(repertoire.content)

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
      <Repertoire />                  
    </div>
  )
}

export default App