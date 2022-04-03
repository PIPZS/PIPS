import styled from "styled-components";
import {Link} from 'react-router-dom';

export const FooterContainer = styled.div`
    background-color: black;
`

export const FooterWrap = styled.div`
    padding: 50px 130px;
    
`

export const FooterInfo = styled.div`
    display: flex;
    margin-bottom: 2rem;
`

export const LeftContainer = styled.div`
    width: 50%;
`
export const RightContainer = styled.div`
    width: 50%;
    text-align: right;
`
export const SocialMediaWrapper = styled.div`
    display: flex;
`
export const SocialLinks = styled.div`
    display: flex;
    justify-content: right;
    gap: 1rem;
`

export const SocialMediaItem = styled.div`
    color: white;
    font-size: 1.3rem;
    transition: .5s all ease-out;

    &:hover{
        cursor: pointer;
        color: red;
    }
`

export const Title = styled.h3`
    color: white;
    font-size: 2rem;
`
export const Subtitle = styled.p`
    color: white;
    font-size: 1.5rem;
`
