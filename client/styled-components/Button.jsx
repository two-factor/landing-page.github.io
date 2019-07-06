import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid ${props => (props.border || '#2D2E3B')};
  background-color: ${props => (props.bgColor || '#96A8FF')};
  border-radius: 5px;
`;

export default Button;
