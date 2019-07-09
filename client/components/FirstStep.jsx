import React from 'react';
import P from '../styled-components/P$.jsx';
import RightCodeDiv from '../styled-components/RightCodeDiv.jsx';
import LeftText from '../styled-components/LeftText.jsx';
import StepsDiv from '../styled-components/StepsDiv$.jsx';

const FirstStep = () => {
  return (
    <StepsDiv id="firstStep" >
      <LeftText>
        <h2>1. Initialize two-auth.</h2>
        <P>
          Created a Twilio account?
          <br />
          Now require two-auth into your application.
          <br />
          Then pass your Twilio Account SID and Auth Token.
          </P>
      </LeftText>
      <RightCodeDiv>
        <p>
          const twoAuth = require('two-auth');
          <br />
          const client = twoAuth(*ACC_SID*, *AUTH_TOKEN*);
        </p>
      </RightCodeDiv>
    </StepsDiv>
  )
}

export default FirstStep;
