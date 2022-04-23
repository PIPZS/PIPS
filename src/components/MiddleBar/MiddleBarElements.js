import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';

export const BarContainer = styled.div`
    background: ${({theme}) => theme.bgc};
    display: flex;
    margin-top: 5rem;
`
export const MainTitle = styled.h3`
    font-size: 2rem;
    font-family: var(--font); 
    color: ${({theme}) => theme.toggle};
    word-wrap: break-word;
    text-align: center;
    text-transform: uppercase;
`

export const MainWrapper = styled.div`
    display: flex;
    width: 75%;
    margin:auto;

    @media screen and (max-width:1650px){
        flex-direction: column;
    }
`
export const InfoWrapper = styled.div`
    display: grid;
    grid-gap: 70px;
    column-gap: 30px;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(80px, auto);
    width: 70%;
    margin: auto;

    @media screen and (max-width:1650px){
        width: 100%;
    }
`
export const Box = styled.div`
    height: 10rem;
    width: 30rem;
    margin:auto;
`
export const BoxTitle = styled.div`
    display:flex;
    text-transform: uppercase;
    color: white;
    margin-bottom: 20px;
    font-family: var(--font);
    font-size: 1.4rem;
    p{
        color:red;
        margin-right:10px;
    }
`
export const BoxText = styled.div`
    color:white;
    font-family: var(--font);
    font-size: 1.3rem;
`

export const ButtonWrapper = styled.div`
    width:30%;
    margin:auto;
    margin-left: 15%;

    @media screen and (max-width:1650px){
        width: 100%;
        margin: auto;
        margin-top: 5%;
    }
`

export const Button = styled(LinkS)`
    color: ${({theme}) => theme.toggle};
    display: flex;
    align-items: center;
    text-decoration: none;
    margin:auto;
    height: 20rem;
    width: 20rem;
    background-color: #202020;
    border-radius: 100%;
    cursor: pointer;
    justify-content: center;
    font-family: var(--font);
    font-size: 1.5rem;
    text-transform: uppercase;
    

    &.active{
        color: #CE1212;
        transition: color 0.4s ease;
    }
    &:hover{
        background: ${({theme}) => theme.toggle};
        transition: all 1s ease;
        color: white;
    }
`