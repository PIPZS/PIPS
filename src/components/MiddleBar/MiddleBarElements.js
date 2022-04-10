import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';

export const BarContainer = styled.div`
    background: #202124;
    display: flex;
    @media screen and (max-width:1000px){
        height:auto;
        flex-direction: column ;
        justify-content: center ;
        align-items: center;
    }
`
export const TextWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width:1000px){
        width:90%;
    }
`

export const Wrapper = styled.div`
    width: 70%;
    display:inline-grid;
    margin-left:15%;
    grid-template-columns:  1fr 3fr;
    grid-template-rows:  100px;
    column-gap: 15px;

    @media screen and (max-width: 1250px){
        width: 90%;
        margin-left: 0px;
    }

    @media screen and (max-width:1000px){
        width: 90%;
        margin-left: 0px;
    }

    @media screen and (max-width:800px){
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center ;
    }


`;

export const Title = styled.h3`
    color: white;
    font-weight: bold;
    font-family: var(--font); 
    color: white;
    width:30%;

    @media screen and (max-width:800px){
        width:100%;
        margin-top:5%;
        text-align: center;
    }
`
export const Subtitle = styled.p`
    color: white;
    font-size: 1.1rem;
    font-family: var(--font); 
    color: white;
    align-items: center;
    text-align: justify;
    margin-left:10%;

    @media screen and (max-width:800px){
        width:100%;
        margin-top:10%;

    }
    
`
export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center ;
    position: relative;
    width: 30%;

    @media screen and (max-width:1000px){
        width:100%;
        margin-top: 30px;
        align-items: center;
        justify-content: center;
        padding-bottom: 20px;
    }
    
`
export const Button = styled(LinkS)`
    right: 5rem;
    top: 50%;
    width: 10rem;
    height:2.5rem;
    background: #CE1212;
    color: white;
    font-size: 1.2rem;
    padding-top: 0.5rem;
    font-family: var(--font); 
    text-align: center;

    &:hover{
        background: white;
        color:black;
        cursor:pointer;
    }
`