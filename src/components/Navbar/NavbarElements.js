import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
    background: ${({ specialScroll }) => (specialScroll ? '#1c1c1c' : 'rgba(0,0,0,0.2)')};
    height: 80px;
    display: flex; 
    font-size: 1rem;
    top: 0;
    z-index:30;
    position:sticky;
    margin-top: -80px;
    justify-content: ${({ specialScroll }) => (specialScroll ? 'flex-end' : 'center')};;
    align-items: ${({ specialScroll }) => (specialScroll ? 'flex-end' : 'center')};;


    /* @media screen and (max-width:960px){
        transition: 0.8s all ease;
    } */
`

export const NavbarContainer = styled.div`
    display: flex;
    height: 80px;
    z-index: 1;
`

export const NavIcon = styled.div`
    height: 80%;
    margin-top: 5px;
    font-size: 3.5rem;
    margin-right: 5%;
    display: ${({ scrollNav }) => (scrollNav ? 'flex' : 'none')};
    align-items:center;
    margin-left:-1300px;

    text-shadow: -1px 1px 0 #f54242,
                        1px 1px 0 #f54242,
                        1px -1px 0 #f54242,
                        -1px -1px 0 #f54242;
`

export const Title = styled.h1`
    font-size: 60px;
    font-family: 'Monstserrat';
    color: #1c1c1c;
`

export const Subtitle = styled.h1`
    font-size: 1.7rem;
    font-family: 'Monstserrat'
    margin-left: 2%;
    color: black;

    text-shadow: -1px 1px 0 #8f8146,
                        1px 1px 0 #8f8146,
                        1px -1px 0 #8f8146,
                        -1px -1px 0 #8f8146;
`

export const NavLogo = styled(LinkR)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width:768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #8f8146;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width:768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    padding-right:30px;
`

export const NavLinks = styled(LinkS)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: 'Monstserrat';

    &.active{
        color: #f54242;
        transition: color 0.4s ease;
    }
`