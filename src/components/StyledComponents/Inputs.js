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
    height: 1.5rem;
    margin: 0rem .3rem;
    font-size: 1rem;
    border-style: none;
    border-radius: 1rem;
    text-align: center;
    background: #fff;
    font-weight: 800;
    color: rgba(0, 0, 0, .62)
`

export const MoveInput = styled.input`
    width: 12rem;
    background-color: #fff;
    margin: .36rem 0;
    padding: 4px;
    font-size: 12px;
    border-style: none;
    border-bottom: .04rem solid rgba(42, 61, 69, .8);
`;

