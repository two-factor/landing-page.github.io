import React from 'react';
import A from '../styled-components/A.jsx';
import Button from '../styled-components/Button.jsx';
import H1 from '../styled-components/H1.jsx';
import NavBar$ from '../styled-components/NavBar$.jsx';
import NavLink from '../styled-components/NavLink.jsx';

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
      <NavLink onClick={() => scroll('installCode')}>
        <h4>INSTALL</h4>
      </NavLink>
      <NavLink onClick={() => scroll('firstStep')}>
        <h4>STEPS</h4>
      </NavLink>
    </NavBar$>
  )
}

export default NavBar;
