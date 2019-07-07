import React from 'react';
import H2 from '../styled-components/H2.jsx';
import P from '../styled-components/P$.jsx';
import RightCodeDiv from '../styled-components/RightCodeDiv.jsx';
import LeftText from '../styled-components/LeftText.jsx';
import StepsDiv from '../styled-components/FirstStep$.jsx';
import LeftCodeDiv from '../styled-components/LeftCodeDiv.jsx';
import RightText from '../styled-components/RightText.jsx';

const ThirdStep = () => {
    return (
        <StepsDiv>
            <RightText>
                <h2>Send your user an SMS code.</h2>
                <p>We help you provide your users an ease of mind that their information is protected.</p>
            </RightText>
            <LeftCodeDiv>
                <p>code goes here</p>
            </LeftCodeDiv>
        </StepsDiv>
    )
}

export default ThirdStep;