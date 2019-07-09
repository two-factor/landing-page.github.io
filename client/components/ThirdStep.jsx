import React from 'react';
import H2 from '../styled-components/H2.jsx';
import P from '../styled-components/P$.jsx';
import RightCodeDiv from '../styled-components/RightCodeDiv.jsx';
import LeftText from '../styled-components/LeftText.jsx';
import StepsDiv from '../styled-components/StepsDiv$.jsx';

const ThirdStep = () => {
    return (
        <StepsDiv>
            <LeftText>
                <h2>3. Send your user an SMS code.</h2>
                <P>
                  Send will automatically send a code to the phone number you set in Step 2.
                  <br />
                  Send is asynchronous and returns a promise that resolves to the code.
                </P>
            </LeftText>
            <RightCodeDiv>
                <p>
                  client.send(*USER_ID*)
                  <br />
                  .then((code) => ...)
                  <br />
                  .catch((err) => ...);
                </p>
            </RightCodeDiv>
        </StepsDiv>
    )
}

export default ThirdStep;
