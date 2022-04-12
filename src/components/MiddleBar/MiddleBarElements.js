import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';

export const BarContainer = styled.div`
    background: #202124;
    display: flex;
    margin-top:0.5rem;
    @media screen and (max-width:1000px){
        height:auto;
        flex-direction: column ;
        justify-content: center ;
        align-items: center;
    }
`
export const MainTitle = styled.h3`
    font-size: 20px;
    font-family: var(--font); 
    color: ${({theme}) => theme.text};
    word-wrap: break-word;
    text-align: center;
    text-transform: uppercase;


`
export const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-left: 7%;
    flex-direction: column;
    @media screen and (max-width:1000px){
        width:90%;
    }
`

export const Wrapper = styled.div`
    width: 85%;
    display:inline-grid;
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
    width:100%;
    margin:auto;
    font-size:19px;

    @media screen and (max-width:800px){
        width:100%;
        margin-top:15%;
        text-align: center;
    }
`
export const Subtitle = styled.p`
    color: white;
    font-size: 17px;
    font-family: var(--font); 
    color: white;
    word-break:normal;
    align-items: center;
    text-align: justify;
    margin:auto;
    margin-left:3%;
    width: 100%;

    @media screen and (max-width:800px){
        width:100%;
        margin-top:5%;

    }
    
`
export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center ;
    position: relative;
    width: 20%;

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
    text-transform: uppercase ;

    &:hover{
        background: white;
        color:black;
        cursor:pointer;
    }
`