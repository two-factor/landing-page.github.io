import React from 'react';
import ScrollTopButton$ from '../styled-components/ScrollTopButton$.jsx';

const ScrollTopButton = () => {
  return (
    <ScrollTopButton$ onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <img src="img/arrowUp.png" alt="arrow" width="50%" height="50%" />
    </ScrollTopButton$>
  )
}

export default ScrollTopButton;
