import React from 'react';
import AppStyle from './styled-components/AppStyle.jsx';
import NavBar from './components/NavBar.jsx';
import TopSection from './components/TopSection.jsx';
import FirstStep from './components/FirstStep.jsx';
import SecondStep from './components/SecondStep.jsx';
import ThirdStep from './components/ThirdStep.jsx';
import FourthStep from './components/FourthStep.jsx';

const App = () => {
  return (
    <AppStyle>
      <NavBar />
      <TopSection />
      <FirstStep />
      <SecondStep />
      <ThirdStep />
      <FourthStep />
    </AppStyle>
  )
}

export default App;