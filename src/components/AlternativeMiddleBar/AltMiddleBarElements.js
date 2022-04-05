import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';

export const BarContainer = styled.div`
    background: #202124;
    height: 250px;
    display: flex;
    justify-content: center ;
    align-items: center;
    padding: 70px;
    @media screen and (max-width:1000px){
        height:auto;
        flex-direction: column ;
        justify-content: center ;
        align-items: center;
    }
`
export const MainWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: center ;
    align-items: center;
    gap: 80px;

    @media screen and (max-width:1000px){
        flex-direction: column ;
        justify-content: center ;
        align-items: center;
        width: 100%;
    }
`

export const TextWrapper = styled.div`
    align-items: center;
    justify-content: center;
    
`
export const Title = styled.h3`
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    font-family: var(--font); 
`
export const Subtitle = styled.p`
    color: white;
    font-size: 1.2rem;
    font-family: var(--font); 
`
export const ButtonWrapper = styled.div`
    position: relative;
    width: 20%;
    margin-top:0px;
`
export const Button = styled(LinkS)`


    width: 10rem;
    background: red;
    color: white;
    font-size: 1.2rem;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    text-align:center;
    font-family: var(--font); 

    &:hover{
        background: white;
        color:black;
        cursor:pointer;
        transition: 0.5s all ease-out;
    }
`