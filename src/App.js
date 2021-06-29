import React, { useEffect, useState } from 'react';
import './App.css';
import tuneDataImport from './tuneData'
import Header from './components/Header'
import Text from './components/Text'
import Tunesheet from './components/Tunesheet'
import AudioElements from './components/AudioElements'
import { client } from './config/contentfulClient'
import marked from 'marked'

const App = () => {

  const [tuneData] = useState(tuneDataImport)
  const [pageIndex, setPageIndex] = useState(0)
  // const [repertoire, setRepertoire] = useState({})
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')

  const handleClick = (index) => {
    setPageIndex(index)
  }

  useEffect(() => {
    client.getEntries()
      .then(entries => {
        setTitle(entries.items[0].fields.title)
        setDescription(entries.items[0].fields.description)
        setContent(entries.items[0].fields.content)
      })
  },[])

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

      <div className="container" style={{
        backgroundColor:"white",
        border:"solid .2rem #FE82CB",
        borderRadius:"2%",
        marginBottom:".5rem"
      }}>        
        <h2 style={{textAlign: 'center'}} dangerouslySetInnerHTML={{__html: `${marked(title)}`}}/>   
        <div style={{margin: '1rem 0'}} dangerouslySetInnerHTML={{__html: `${marked(description)}`}}/>   
        <div style={{marginTop:'2rem'}} dangerouslySetInnerHTML={{__html: `${marked(content)}`}}/>   
      </div>                
    </div>
  )
}

export default App