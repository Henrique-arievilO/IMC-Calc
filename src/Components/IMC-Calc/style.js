import styled from "styled-components";

export const Title = styled.h1`
    font-size: 2rem;
    text-shadow: 2px 2px 2px #000;
    color: var(--titleColor);
    margin: 0 auto 1rem;
    text-align: center;

    @media screen and (max-width: 800px){
        font-size: 1.5rem;
    }
`
export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Label = styled.label`
    font-size: 1.5rem;
    margin: .5rem;
    font-weight: 600;

    @media screen and (max-width: 800px){
        font-size: 1rem;
    }
`

export const Input = styled.input`
    font-size: 1.5rem;
    margin-left: 1rem;
    width: 8rem;

    @media screen and (max-width: 800px){
        font-size: 1rem;
    }
`
export const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Button = styled.button`
    width: 8rem;
    border: none;
    background-color: var(--titleColor);
    font-size: 1.5rem;
    margin: 1rem;
    padding: .5rem 1rem;
    box-shadow: 2px 2px 4px #000;
    color: #fff;

    @media screen and (max-width: 800px){
        font-size: 1rem;
    }
    @media screen and (max-width: 400px){
        width: 6rem;
    }
`
export const P = styled.p`
    font-size: 1.5rem;
    margin: 1rem;
    text-align: center;

    @media screen and (max-width: 800px){
        font-size: 1rem;
    }
`