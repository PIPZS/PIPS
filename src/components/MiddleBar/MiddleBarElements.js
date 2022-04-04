import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';

export const BarContainer = styled.div`
    background: ${({theme}) => theme.text};
    padding-bottom : 2rem;
    display: flex;
    height: 250px;
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
    font-family: var(--font); 
    color: ${({theme}) => theme.bgc};
`
export const Subtitle = styled.p`
    color: white;
    font-size: 1.1rem;
    font-family: var(--font); 
    color: ${({theme}) => theme.bgc};
`
export const ButtonWrapper = styled.div`
    position: relative;
    width: 20%;
`
export const Button = styled(LinkS)`
    position: absolute;
    right:5rem;
    top: 43%;
    width: 10rem;
    background: red;
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