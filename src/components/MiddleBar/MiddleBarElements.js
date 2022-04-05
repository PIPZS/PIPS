import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';

export const BarContainer = styled.div`
    background: #202124;
    display: flex;
    height: 280px;
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
    display: flex;
    flex-direction: column ;
    margin-left:15%;

    @media screen and (max-width:1000px){
        width: 90%;
        margin-left: 0px;
    }
`;

export const Title = styled.h3`
    color: white;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 2rem;
    font-family: var(--font); 
    color: white;
`
export const Subtitle = styled.p`
    color: white;
    font-size: 1.1rem;
    font-family: var(--font); 
    color: white;
    align-items: center;
`
export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center ;
    position: relative;
    width: 30%;

    @media screen and (max-width:1000px){
        width:100%;
        margin-top 30px;
        align-items: center;
        justify-content: center;
        padding-bottom: 20px;
    }
    
`
export const Button = styled(LinkS)`
    right: 5rem;
    top: 50%;
    width: 10rem;
    background: #CE1212;
    color: white;
    font-size: 1.2rem;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    font-family: var(--font); 
    text-align: center;

    &:hover{
        background: white;
        color:black;
        cursor:pointer;
    }
`