import styled from 'styled-components'

export const Button = styled.button`
  background: ${props => props.primary ? "#2A3D45" : "#A63D40"};
  background: ${props => props.go ? "rgb(206, 206, 206)" : "#A63D40"};
  color: ${props => props.go ? "rgb(28, 48, 78)" : "#E2DED3"};
  border: ${props => props.primary ? ".1rem solid #E2DED3" : ""}; 

  font-size: 1.1rem;
  padding: 0.18em 1.4rem;
  margin-top: 1rem;
  border-radius: 3px;
  font-family: 'Open Sans Condensed', sans-serif;
  letter-spacing: .07rem;
`;