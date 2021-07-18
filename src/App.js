import React, { useEffect, useState } from 'react';
import './App.css';
import tuneDataImport from './tuneData'
import TunePage from './pages/TunePage'
import Repertoire from './components/Repertoire'


const App = () => {

  const [tuneData] = useState(tuneDataImport)
  const [pageIndex, setPageIndex] = useState(0)

  const handleClick = (index) => {
    setPageIndex(index)
  } 

  return (            
    <div className="container">
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