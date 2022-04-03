import styled from "styled-components";

export const BarContainer = styled.div`
    background: black;
    padding-bottom : 2rem;
    display: flex;
`
export const TextWrapper = styled.div`
    width: 70%;
    margin-left: 10rem;
`
export const Title = styled.h3`
    color: white;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 2rem;
`
export const Subtitle = styled.p`
    color: white;
    font-size: 1.1rem;
`
export const ButtonWrapper = styled.div`
    position: relative;
    width: 20%;
`
export const Button = styled.button`
    position: absolute;
    right:5rem;
    top: 45%;
    width: 10rem;
    background: red;
    color: white;
    border: 1px solid black;
    font-size: 1.2rem;
    height: 3.5rem;
`