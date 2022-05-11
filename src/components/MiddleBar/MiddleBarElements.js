import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';

export const BarContainer = styled.div`
    background: ${({theme}) => theme.bgc};
    display: flex;
    margin-top: 2rem;
`
export const MainTitle = styled.h3`
    font-size: 20px;
    font-family: var(--font); 
    color: ${({theme}) => theme.toggle};
    word-wrap: break-word;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 5rem;
`

export const MainWrapper = styled.div`
    display: flex;
    width: 75%;
    margin:auto;

    @media screen and (max-width:1000px){
        flex-direction: column;
        width: 80%;
    }
`
export const InfoWrapper = styled.div`
    display: grid;
    grid-gap: 30px;
    column-gap: 50px;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(80px, auto);
    width: 70%;
    margin: auto;

    @media screen and (max-width:1650px){
        display:flex;
        flex-direction: column;
        gap: 0px;
    }

    @media screen and (max-width:1000px){
        width: 100%;
    }
`
export const Box = styled.div`
    height: 10rem;
    width: 30rem;
    margin: auto;

    @media screen and (max-width:650px){
        width: 100%;
    }
    
`
export const BoxTitle = styled.div`
    display:flex;
    text-transform: uppercase;
    color: white;
    margin-bottom: 16px;
    font-family: var(--font);
    font-size: 19px;
    font-weight: bold;
    p{
        color: ${({theme}) => theme.toggle};
        margin-right:10px;
    }

    @media screen and (max-width:650px){
        font-size: 19px;
    }

    @media screen and (max-width:400px){
        font-size: 19px;
    }
`
export const BoxText = styled.div`
    color:white;
    font-family: var(--font);
    font-size: 1rem;
    @media screen and (max-width:650px){
        word-break: break-word;
        word-wrap: break-word;
        font-size: 1rem;
    }

    @media screen and (max-width:400px){
        font-size: 0.9rem;
    }`

export const ButtonWrapper = styled.div`
    width:30%;
    margin:auto;
    margin-left: 15%;

    @media screen and (max-width:1650px){
        margin: auto;
        width: 50%;
    }

    @media screen and (max-width:1000px){
        width: 100%;
    }
`

export const Button = styled(LinkS)`
    color: ${({theme}) => theme.toggle};
    display: flex;
    align-items: center;
    text-decoration: none;
    margin:auto;
    height: 15rem;
    width: 15rem;
    background-color: #202020;
    border-radius: 100%;
    cursor: pointer;
    justify-content: center;
    font-family: var(--font);
    font-size: 1.5rem;
    text-transform: uppercase;
    text-align:center;
    overflow:hidden;
    

    &.active{
        color: #CE1212;
        transition: color 0.4s ease;
    }

    &:hover{
        background: ${({theme}) => theme.toggle};
        transition: all 1s ease;
        color: white;
    }

    @media screen and (max-width:650px){
        height: 15rem;
        width: 15rem;
        margin-top:50px;
        font-size: 1.2rem;
    }

    @media screen and (max-width:350px){
        height: 10rem;
        width: 10rem;
        font-size: 1rem;
    }
    
`