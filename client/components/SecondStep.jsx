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
        <p>
          client.create(*USER_ID*, *PHONE_NUMBER*)
          <br />
          .then(...)
          <br />
          .catch((err) => ...);
        </p>
      </LeftCodeDiv>
      <RightText>
        <h2>2. Create your verification service.</h2>
        <P>
          Use the create method to start up a service for a user.
          <br />
          The create method is asynchronous. It returns a promise.
        </P>
      </RightText>
    </StepsDiv>
  )
}

export default SecondStep;
