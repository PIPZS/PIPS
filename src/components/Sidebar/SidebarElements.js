import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import {Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: ${({theme}) => theme.bgc};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: ${({theme}) => theme.toggle};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color:#fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-align: center;

`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    color: white;
    text-transform: uppercase;

    &:hover{
        color: black;
        background-color: ${({theme}) => theme.toggle};
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkS)`
    margin-top: 20px;
    background: ${({theme}) => theme.toggle};
    white-space: nowrap;
    width: 150px;
    height: 50px;
    padding-top: 10px;
    color: black;
    font-size: 25px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #1c1c1c;
        color: ${({theme}) => theme.toggle};
    }
`

export const AlternativeLinks = styled.div`
    
`

export const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
    align-items:center;
    justify-content:center;

    svg{
        font-size: 2rem;
        &:hover{
            color: #CE1212;
        }
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
`

export const DivisionLine = styled.div`
    border-bottom: 1px solid white;
    width: 13rem;
    margin:auto;
    margin-bottom: 80px;
    margin-top: 60px;
    overflow:hidden;
`