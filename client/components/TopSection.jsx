import React from 'react';
import DivCLI from '../styled-components/DivCLI.jsx';
import PCLI from '../styled-components/PCLI.jsx';
import TopSection$ from '../styled-components/TopSection$.jsx';
import Spacer from '../styled-components/Spacer.jsx';


const TopSection = () => {
  return (
    <TopSection$>
      <Spacer />
      <DivCLI>
        <PCLI>~$ npm install --save two-factor</PCLI>
      </DivCLI>
    </TopSection$>
  )
}

export default TopSection;