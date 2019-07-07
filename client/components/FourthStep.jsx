import React from 'react';
import H2 from '../styled-components/H2.jsx';
import P from '../styled-components/P$.jsx';
import LeftCodeDiv from '../styled-components/LeftCodeDiv.jsx';
import RightText from '../styled-components/RightText.jsx';
import StepsDiv from '../styled-components/FirstStep$.jsx';

const FourthStep = () => {
    return (
        <StepsDiv>
            <LeftCodeDiv>
                <p>client.create(*USER_ID*, *PHONE_NUMBER*);</p>
            </LeftCodeDiv>
            <RightText>
                <h2>Create your verification service.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </RightText>
        </StepsDiv>
    )
}

export default FourthStep;