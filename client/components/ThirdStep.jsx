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
                <h2>Send your user an SMS code.</h2>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</P>
            </LeftText>
            <RightCodeDiv>
                <p>client.send(*USER_ID*);</p>
            </RightCodeDiv>
        </StepsDiv>
    )
}

export default ThirdStep;