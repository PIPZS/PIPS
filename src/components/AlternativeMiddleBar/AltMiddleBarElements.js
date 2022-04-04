import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';

export const BarContainer = styled.div`
    background: ${({theme}) => theme.text};
    height: 250px;
    display: flex;
`
export const TextWrapper = styled.div`
    margin-left: 10rem;
    width: 30%;
    margin-top: 5rem;
    
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
    position: absolute;
    right:5rem;
    top: 40%;
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