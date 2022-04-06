import styled from "styled-components";
import {Link} from 'react-router-dom';

export const FooterContainer = styled.div`
    background: #1c1c1c;
`

export const FooterWrap = styled.div`
    padding: 50px 130px;

    @media screen and (max-width:900px){
        padding: 50px 50px;
    }
    
`

export const FooterInfo = styled.div`
    display: flex;
    margin-bottom: 2rem;
    @media screen and (max-width:750px){
        flex-direction: column;
        align-items:center;
        justify-content:center;
    }
`

export const LeftContainer = styled.div`
    width: 50%;

    @media screen and (max-width:750px){
        flex-direction: column;
        width: 100%;
        align-items:center;
        justify-content:center;
        text-align: center;
        margin-bottom: 30px;
    }
`
export const RightContainer = styled.div`
    width: 50%;
    text-align: right;

    @media screen and (max-width:750px){
        flex-direction: column;
        width: 100%;
        align-items:center;
        justify-content:center;
        text-align: center;
    }
`
export const SocialMediaWrapper = styled.div`
    display: flex;

    @media screen and (max-width:750px){
        flex-direction: column;
        width: 100%;
        align-items:center;
        justify-content:center;
    }
`
export const SocialLinks = styled.div`
    display: flex;
    justify-content: right;
    gap: 1rem;

    @media screen and (max-width:750px){
        width: 100%;
        align-items:center;
        justify-content:center;
    }

`

export const SocialMediaItem = styled.div`
    color: white;
    font-size: 1.3rem;
    transition: .5s all ease-out;

    @media screen and (max-width:750px){
        font-size: 1rem;
    }

    &:hover{
        cursor: pointer;
        color: #CE1212;
    }
`

export const Title = styled.h3`
    font-size: 2rem;
    color: white;
`
export const Subtitle = styled.p`
    font-size: 1.5rem;
    color: white;
`
