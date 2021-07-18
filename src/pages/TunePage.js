import React from 'react';
import Text from '../components/Text'
import Tunesheet from '../components/Tunesheet'
import AudioElements from '../components/AudioElements'

const TunePage = ({ tuneData, pageIndex, setPageIndex }) => {
  
  return (  
  <>
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
