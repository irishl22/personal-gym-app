import styled from 'styled-components'

export const Button = styled.button`
  background: ${props => props.primary ? "#2A3D45" : "#A63D40"};
  border: ${props => props.primary ? ".1rem solid #E2DED3" : ""}; 

  font-size: 1.1rem;
  padding: 0.18em 1.2rem;
  margin-top: 1rem;
  border-radius: 3px;
  color: #E2DED3;
  font-family: 'Open Sans Condensed', sans-serif;
  letter-spacing: .07rem;
`;