import styled from 'styled-components';

const NavBar$ = styled.section`
  position: sticky;
  top: 0;
  height: 70px;
  padding: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 0.5fr 0.5fr;
  background-color: rgba(47, 58, 67, .9);
  align-items: center;
  color: white;
  letter-spacing: 2px;
  // border: 5px solid rgba(255, 0, 255, 0.7);
  // border-radius: 15px;
  // box-shadow: 0px 15px rgba(155, 0, 155, 0.7);
`

export default NavBar$;
