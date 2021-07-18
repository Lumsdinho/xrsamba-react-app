import React, { useEffect, useState } from 'react';
import './App.css';
import tuneDataImport from './tuneData'
import Header from './components/Header'
import TunePage from './pages/TunePage'
import Repertoire from './components/Repertoire'

const App = () => {

  const [tuneData] = useState(tuneDataImport)
  const [pageIndex, setPageIndex] = useState(0)

  return (            
    <div className="container">
      <Header 
        header={tuneData[pageIndex].title}
        data={tuneData}
        setPageIndex={setPageIndex}
      />    
      <TunePage 
        tuneData={tuneData}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
      />
      <Repertoire />
    </div>  
  )
}

export default App