import React from 'react';
import DivCLI from '../styled-components/DivCLI.jsx';
import pCLI from '../styled-components/pCLI.jsx';


const TopSection = () => {
  return (
    <div>
      <DivCLI>
        <pCLI>~$ npm install --save two-factor</pCLI>
      </DivCLI>
    </div>
  )
}

export default TopSection;