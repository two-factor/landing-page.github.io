import React from 'react';
import H2 from '../styled-components/H2.jsx';
import P from '../styled-components/P$.jsx';
import LeftCodeDiv from '../styled-components/LeftCodeDiv.jsx';
import RightText from '../styled-components/RightText.jsx';
import StepsDiv from '../styled-components/StepsDiv$.jsx';

const SecondStep = () => {
    return (
        <StepsDiv>
            <LeftCodeDiv>
                <p>client.create(*USER_ID*, *PHONE_NUMBER*);</p>
            </LeftCodeDiv>
            <RightText>
                <h2>Create your verification service.</h2>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</P>
            </RightText>
        </StepsDiv>
    )
}

export default SecondStep;