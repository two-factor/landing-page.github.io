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
                <p>client.verify(*USER_ID*, *SIX_DIGIT_CODE*)</p>
            </LeftCodeDiv>
            <RightText>
                <h2>Verify your user.</h2>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</P>
            </RightText>
        </StepsDiv>
    )
}

export default FourthStep;