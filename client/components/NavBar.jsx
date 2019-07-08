import React from 'react';
import A from '../styled-components/A.jsx';
import Button from '../styled-components/Button.jsx';
import H1 from '../styled-components/H1.jsx';
import NavBar$ from '../styled-components/NavBar$.jsx';

const NavBar = (props) => {
  function scroll(id) {
    const top = document.querySelector(`#${id}`).offsetTop;
    const offset = document.querySelector('#NavBar').offsetHeight;
    const target = top - offset;

    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  }
  return (
    <NavBar$ id="NavBar">
      <H1>TWO-AUTH</H1>
      <h4 onClick={() => scroll('installCode')}>INSTALL</h4>
      <h4 onClick={() => scroll('firstStep')}>STEPS</h4>
    </NavBar$ >
  )
}

export default NavBar;
