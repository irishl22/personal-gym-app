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
  font-size: 1.2rem;
  font-weight: 800;
  height: 3.4rem;
  width: 9.9rem;
  font-family: 'Abel', sans-serif;
  letter-spacing: .07rem;
  background: rgb(219, 84, 97);
  border-style: none;
  color: #fff;
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
  border: none;
`;
export const UploadButton = styled.button`
  background: rgba(37, 53, 60, 0.895);
  color: #E2DED3;
  border-radius: .9rem;
  font-size: .76em;
  padding: 0.28em .5rem;
  margin-left: .9rem;
  border: none;
`;