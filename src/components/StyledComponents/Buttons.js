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
`

export const GoButton = styled.button`
  font-size: .8rem;
  margin: 0.4rem 0rem 0rem 0rem;
  padding: 0.16em .8rem;
  border-radius: 3px;
  font-family: 'Open Sans Condensed', sans-serif;
  letter-spacing: .07rem;
  
`
export const MoveButton = styled.button `
  font-size: .6rem;
  margin: .54rem;
  padding .2rem;
  height: 5.5rem;
  width: 6.5rem;
  border-radius: 3px;
  font-family: 'Cabin Condensed', sans-serif;
  background-image: url('');
  text-transform: uppercase;
`
export const ListButton = styled.button`
  background: #25353C;
  color: #E2DED3;
  font-size: 1.1rem;
  padding: 0.18em 1rem;
  margin: 1rem 1rem;
  border-radius: 3px;
  font-family: 'Open Sans Condensed', sans-serif;
  letter-spacing: .07rem;
`;

export const DoneButton = styled.button`
  background: #30AF9B;
  color: #fff;
  font-size: 1.1rem;
  padding: 0.28em 1rem;
  margin: 1rem 2.5rem;
  font-family: 'Ropa Sans', sans-serif;
  border-radius: 1rem;
  border: .07rem solid rgba(218, 218, 218, 0.863);
`;