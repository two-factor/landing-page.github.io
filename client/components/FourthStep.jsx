import React from 'react';
import H2 from '../styled-components/H2.jsx';
import P from '../styled-components/P$.jsx';
import LeftCodeDiv from '../styled-components/LeftCodeDiv.jsx';
import RightText from '../styled-components/RightText.jsx';
import StepsDiv from '../styled-components/StepsDiv$.jsx';

const FourthStep = () => {
    return (
        <StepsDiv>
            <LeftCodeDiv>
                <p>
                  client.verify(*USER_ID*, *SIX_DIGIT_CODE*)
                  <br />
                  .then((valid) => ...)
                  <br />
                  .catch((err) => ...);
                </p>
            </LeftCodeDiv>
            <RightText>
                <h2>4. Verify your user.</h2>
                <P>
                  Verify takes in the USER_ID and the CODE that user received.
                  <br />
                  Verify returns a promise that resolves to true if that code is valid.
                </P>
            </RightText>
        </StepsDiv>
    )
}

export default FourthStep;
