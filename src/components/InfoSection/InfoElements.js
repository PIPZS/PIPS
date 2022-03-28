import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';
import { style } from "@mui/system";


export const InfoContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    padding: 50px 24px;
    position: relative;
    padding-top 5%;

    @media screen and (max-width:1200px){
        display: flex;
        flex-direction: column;
    }
`

export const InfoWrapper = styled.div`
    justify-content: left;
    width: 50%;
    margin-left: 3%;;

    @media screen and (max-width:1200px){
        width: 100%;
        margin-left: 0%;;
        padding-top: 0%;
    }
`

export const InfoTitle = styled.h1`
    font-family: 'Inconsolata'; 
    font-size: 49px;
    color: #f54242;
    word-wrap: break-word;

    @media screen and (max-width:500px){
        font-size: 8vw;
}
`
export const ContactText = styled.div`
    margin-top: 20%;
`

export const InfoSubtitle = styled.p`
    font-family: 'Inconsolata'; 
    font-size: 23px;
    color: white;
    margin-bottom: 5%;
    position: relative;
    z-index: 20;

    @media screen and (max-width:500px){
        font-size: 16px;
    }
`

export const Button = styled(LinkS)`
    background-color: black;
    border: 2px solid #0f0f0f;
    color:white;
    padding: 2%;
    font-size: 1.5rem;
    word-wrap: break-word;

    &:hover{
        background:white;
        color:black;
        cursor:pointer;
    }
`

export const InfoText = styled.p`
    color: white;
    font-size: 1.8em;
    word-break: break-all;
    margin-bottom: 5%;

    @media screen and (max-width:500px){
        font-size: 6vw;
}
`

export const InfoImage = styled.img`
    position: absolute;
    height: 50%;
    left: 25%;
    top: 33%;
    z-index: 1;
`

export const InfoCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: 260px 260px;
    grid-template-rows: 260px 260px;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    width: 70%;
    height: 70%;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media screen and (max-width: 1200px){
        width: 80%;
        margin: auto;
        margin-bottom: 5%;
        margin-top: 5%;
    }   

    @media screen and (max-width: 700px){
        grid-template-columns: 230px 230px;
        grid-template-rows: 230px 230px;
    }  
    
    @media screen and (max-width: 500px){
        grid-template-columns: 40vw 40vw;
        grid-template-rows: 40vw 40vw;
    }

    @media screen and (max-width: 400px){
        display:flex;
        flex-direction:column;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
    } 
`

export const CardFrontText = styled.div`
    margin-top: 20%;
    font-size: 1.8rem;

    @media screen and (max-width: 700px){
        font-size: 1.7rem;
    }  
    
    @media screen and (max-width: 500px){
        font-size: 5vw;
    }  
`

export const CardBackText = styled.div`
    font-size: 1.1rem;
    width: 90%;
    margin: auto;
    margin-top: 10%;
`
export const Text = styled.p`  
    margin-top:5%;
`
export const ImageWrapper = styled.div`
    width: 35%;
    height: 35%;
    margin:auto;    
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`