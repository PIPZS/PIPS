import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';

export const BarContainer = styled.div`
    background: ${({theme}) => theme.text};
    padding-bottom : 2rem;
    display: flex;
    height: 260px;
    @media screen and (max-width:1000px){
        height:auto;
        flex-direction: column ;
        justify-content: center ;
        align-items: center;


    }
`
export const TextWrapper = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width:1000px){
        margin-left: 0;
        width:100%;


    }

`

export const Wrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column ;
    margin-left:20% ;



`;

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
    align-items: center;
`
export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center ;
    position: relative;
    width: 30%;
    
`
export const Button = styled(LinkS)`

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