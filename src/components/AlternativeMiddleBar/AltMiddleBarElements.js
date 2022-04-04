import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';

export const BarContainer = styled.div`
    background: ${({theme}) => theme.text};
    height: 250px;
    display: flex;
    justify-content: center ;
    align-items: center;
    @media screen and (max-width:1000px){
        height:auto;
        flex-direction: column ;
        justify-content: center ;
        align-items: center;
        height: auto;


    }
`
export const TextWrapper = styled.div`
    
    
`
export const Title = styled.h3`
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    font-family: var(--font); 
    color: ${({theme}) => theme.bgc};
`
export const Subtitle = styled.p`
    color: white;
    font-size: 1.2rem;
    font-family: var(--font); 
    color: ${({theme}) => theme.bgc};
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