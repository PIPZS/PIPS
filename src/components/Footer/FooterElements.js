import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';


export const FooterContainer = styled.div`
    background: #1c1c1c;
`

export const FooterWrap = styled.div`
    padding: 25px 130px;

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
    align-items:center;

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

    svg{
        font-size: 2rem;
        &:hover{
            color: #CE1212;
        }
    }

    @media screen and (max-width:750px){
        width: 100%;
        align-items:center;
        justify-content:center;
    }

`

export const SocialMediaItem = styled.div`
    color: white;
    font-size: 19px;
    font-family: var(--font);
    transition: .5s all ease-out;
    word-break: break-all;

    &:hover{
        cursor: pointer;
        color: ${({theme}) => theme.toggle};
    }

    @media screen and (max-width:750px){
        font-size: 1rem;
    }

    @media screen and (max-width:500px){
        display: ${props => props.alt ? '' : 'none' };
    }
`

export const Title = styled(LinkR)`
    font-size: 25px;
    color: white;
    font-family: ${props => props.alt ? 'Abibas' : 'var(--font)' };
    word-break: break-all;
    text-decoration: none;
`
export const Subtitle = styled.p`
    font-size: 19px;
    color: white;
    font-family: var(--font);
    word-break: break-all;
`
export const AlternativeLinks = styled.div`
    display:none;
    @media screen and (max-width:500px){
        display: flex;
    }
`