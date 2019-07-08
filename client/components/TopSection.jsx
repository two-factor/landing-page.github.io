import React from 'react';
import DivCLI from '../styled-components/DivCLI.jsx';
import PCLI from '../styled-components/PCLI.jsx';
import Button from '../styled-components/Button.jsx';
import TopSection$ from '../styled-components/TopSection$.jsx';
import Spacer from '../styled-components/Spacer.jsx';
import CodeDiv from '../styled-components/CodeDiv.jsx';
import PageTitle$ from '../styled-components/PageTitleH2$.jsx';


const TopSection = () => {
  return (
    <TopSection$>
      <PageTitle$>
      Simplifying two-factor SMS authentication for your application so you can relax.
      </PageTitle$>
      <CodeDiv>
        <p>
        const twoFactor = require('two-factor'); 
        <br></br>
        const client = twoFactor(*ACC_SID*, *AUTH_TOKEN*);
        <br></br>
        client.create(*USER_ID*, *PHONE_NUMBER*);
        <br></br>
        client.send(*USER_ID*);
        <br></br>
        client.verify(*USER_ID*, *SIX_DIGIT_CODE*);
        </p>
      </CodeDiv>
      <br></br>
      <Button>Two-Auth on NPM</Button>
      <Button>GitHub ReadMe</Button>
      <Spacer id="installCode"/>
      <p>Run this code inside your terminal to install two-auth.</p>
      <CodeDiv>
        <p>~$ npm install --save two-factor</p>
      </CodeDiv>
    </TopSection$>
  )
}

export default TopSection;
