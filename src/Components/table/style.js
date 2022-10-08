import styled from "styled-components";

export const Table = styled.table`
    border: 1px solid #000;
    box-shadow: 5px 5px 10px #000;
    margin: 1rem auto;
    font-size: 1.5rem;
    width: 30rem;
    text-align: center;

    @media screen and (max-width: 800px){
        font-size: 1rem;
        width: 20rem;
    }
    @media screen and (max-width: 400px){
        width: 17rem;
        font-size: .9rem;
    }
`

export const Thead = styled.thead`
    border: 1px solid #000;
    background-color: #008080;
`

export const Th = styled.th`
    border: 1px solid #000;
    background-color: #00808080;
`

export const Td = styled.td`
    border: 1px solid #000;
    background-color: #00808080;
`