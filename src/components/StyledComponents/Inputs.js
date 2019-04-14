import styled from 'styled-components'


export const Input = styled.input`
    width: ${props => props.secondary ? "9.9rem" : "17rem"};

    padding: 4px;
    font-size: 12px;
    background-color: #E2DED3;
    margin: .36rem 0;
    border-style: none;
    border-bottom: .04rem solid rgba(42, 61, 69, .8);
`;