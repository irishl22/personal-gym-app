import styled from 'styled-components'


export const Input = styled.input`
    width: ${props => props.secondary ? "9.9rem" : "17rem"};
    
    color: ${props => props.dash ? "#E2DED3" : ""};
    background-color: #E2DED3;
    margin: .36rem 0;
    padding: 4px;
    font-size: 12px;
    border-style: none;
    border-bottom: .04rem solid rgba(42, 61, 69, .8);
`;

export const InputTime = styled.input`
    width: 3rem;
    height: 1.4rem;
    background-color: #E2DED3;
    margin: 0rem .4rem;
    font-size: 12px;
    border-style: none;
    border-bottom: .04rem solid rgba(42, 61, 69, .8);
    border-radius: 1rem;
    text-align: center;
`

