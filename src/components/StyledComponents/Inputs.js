import styled from 'styled-components'


export const Input = styled.input`
    width: ${props => props.secondary ? "9.9rem" : "17rem"};
    width: ${props => props.dash ? "3rem" : "17rem"};
    margin: ${props => props.dash ? "0rem 1.4rem" : ".36rem 0"};
    background-color: ${props => props.dash ? "rgb(219, 84, 97)" : "#E2DED3"};
    color: ${props => props.dash ? "#E2DED3" : ""};

    padding: 4px;
    font-size: 12px;
    border-style: none;
    border-bottom: .04rem solid rgba(42, 61, 69, .8);
`;