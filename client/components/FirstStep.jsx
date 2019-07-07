import React from 'react';
import H2 from '../styled-components/H2.jsx';
import P from '../styled-components/P$.jsx';
import RightCodeDiv from '../styled-components/RightCodeDiv.jsx';
import LeftText from '../styled-components/LeftText.jsx';
import FirstStepDiv from '../styled-components/FirstStep$.jsx';

const FirstStep = () => {
    return (
        <FirstStepDiv>
            <LeftText>
                <h2>1. Create your verification service.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </LeftText>
            {/* <H2>1. Create your verification service.</H2>
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</P> */}
            <RightCodeDiv>
                <p>code goes here</p>
            </RightCodeDiv>
        </FirstStepDiv>
    )
}

export default FirstStep;