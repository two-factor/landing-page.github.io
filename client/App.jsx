import React from 'react';
import AppStyle from './styled-components/AppStyle.jsx';
import NavBar from './components/NavBar.jsx';
import TopSection from './components/TopSection.jsx';
import FirstStep from './components/FirstStep.jsx';
import SecondStep from './components/SecondStep.jsx';
import ThirdStep from './components/ThirdStep.jsx';

const App = () => {
  return (
    <AppStyle>
      <NavBar />
      <TopSection />
      <p>yo yo pleawe got hot loadingse</p>
      <p>Hello World</p>
      <FirstStep />
      <SecondStep />
      <ThirdStep />
    </AppStyle>
  )
}

export default App;