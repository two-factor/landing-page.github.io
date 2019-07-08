import React from 'react';
import DivCLI from '../styled-components/DivCLI.jsx';
import PCLI from '../styled-components/PCLI.jsx';
import TopSection$ from '../styled-components/TopSection$.jsx';
import Spacer from '../styled-components/Spacer.jsx';
import CodeDiv from '../styled-components/CodeDiv.jsx';


const TopSection = () => {
  return (
    <TopSection$>
      {/* <Spacer /> */}
      <h2>
        Some title here.
      </h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <CodeDiv>
        <p>~$ npm install --save two-factor</p>
      </CodeDiv>
    </TopSection$>
  )
}

export default TopSection;