import React from 'react';
import H2 from '../styled-components/H2.jsx';
import P from '../styled-components/P$.jsx';
import RightCodeDiv from '../styled-components/RightCodeDiv.jsx';
import LeftText from '../styled-components/LeftText.jsx';
import StepsDiv from '../styled-components/FirstStep$.jsx';

const FirstStep = () => {
    return (
        <StepsDiv>
            <LeftText>
                <h2>Initialize your two-auth package.</h2>
                <p>Created a Twilio account? Check. <br></br>Now require two-auth into your application.</p>
            </LeftText>
            <RightCodeDiv>
                <p>const twoFactor = require('two-factor'); <br></br>const client = twoFactor(*ACC_SID*, *AUTH_TOKEN*);</p>
            </RightCodeDiv>
        </StepsDiv>
    )
}

export default FirstStep;