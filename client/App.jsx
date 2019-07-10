import React from 'react';
import AppStyle from './styled-components/AppStyle.jsx';
import NavBar from './components/NavBar.jsx';
import Button from './styled-components/Button.jsx';
import TopSection from './components/TopSection.jsx';
import FirstStep from './components/FirstStep.jsx';
import SecondStep from './components/SecondStep.jsx';
import ThirdStep from './components/ThirdStep.jsx';
import FourthStep from './components/FourthStep.jsx';
import ScrollTopButton from './components/ScrollTopButton.jsx';
import ButtonDiv from './styled-components/ButtonDiv.jsx';

const App = () => {
  return (
    <div>
      <NavBar />
      <ScrollTopButton />
      <AppStyle>
        <TopSection />
        <FirstStep />
        <SecondStep />
        <ThirdStep />
        <FourthStep />
      </AppStyle>
    </div>
  )
}

export default App;
