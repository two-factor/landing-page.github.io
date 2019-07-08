import React from 'react';
import AppStyle from './styled-components/AppStyle.jsx';
import NavBar from './components/NavBar.jsx';
import Button from './styled-components/Button.jsx';
import TopSection from './components/TopSection.jsx';
import Spacer from './styled-components/Spacer.jsx';
import FirstStep from './components/FirstStep.jsx';
import SecondStep from './components/SecondStep.jsx';
import ThirdStep from './components/ThirdStep.jsx';
import FourthStep from './components/FourthStep.jsx';

const App = () => {
  return (
    <div>
    <NavBar />
    <AppStyle>
      <TopSection />
      <FirstStep />
      <SecondStep />
      <ThirdStep />
      <FourthStep />
      <Button>Two-Auth on NPM</Button>
    </AppStyle>
    </div>
  )
}

export default App;