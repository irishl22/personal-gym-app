import styled from 'styled-components'

export const Button = styled.button`
  background: ${props => props.primary ?  "#25353C" : "#9C3538"};
  color: ${props => props.go ? "rgb(28, 48, 78)" : "#E2DED3"};
  border: ${props => props.primary ? ".1rem solid #E2DED3" : ""}; 

  font-size: 1.1rem;
  padding: 0.18em 1.4rem;
  margin-top: 1rem;
  border-radius: 3px;
  font-family: 'Open Sans Condensed', sans-serif;
  letter-spacing: .07rem;
`;

export const MoveButton = styled.button`
  font-size: .8rem;
  padding: 0.16em .8rem;
  margin: .7rem;
  border-radius: 3px;
  font-family: 'Open Sans Condensed', sans-serif;
  letter-spacing: .07rem;
`