import styled from 'styled-components';

const Button = styled.button`
  // border: 1px solid ${props => (props.border || '#2D2E3B')};
  background-color: ${props => (props.bgColor || '#292929')};
  border-radius: 5px;
  height: 50px;
  width: 230px;
  font-size: 16px;
  outline: none;
  color: #fff;
  margin-top: 3%;
  padding-left: 3%;
  padding-right: 3%;
`;

export default Button;
