import React from 'react';
import Header from '../components/Header'
import Text from '../components/Text'
import Tunesheet from '../components/Tunesheet'
import AudioElements from '../components/AudioElements'


const TunePage = ({ tuneData, pageIndex, setPageIndex }) => {
  
  return (  
  <>
    <Header 
      header={tuneData[pageIndex].title}
      data={tuneData}
      setPageIndex={setPageIndex}
    />
    <Text text={tuneData[pageIndex].text}
    />
    <Tunesheet  src={tuneData[pageIndex].diagram}
    />
    <AudioElements  tuneData={tuneData}
                    pageIndex={pageIndex}/> 
  </>
  )
}

export default TunePage
