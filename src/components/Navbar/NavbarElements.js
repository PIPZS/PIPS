import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
    background: ${({ specialScroll }) => (specialScroll ? '#202124' : 'rgba(0,0,0,0.2)')};
    height: 80px;
    display: ${({ specialScroll }) => (specialScroll ? 'flex' : 'none')}; 
    font-size: 1rem;
    top: 0;
    z-index:30;
    position:sticky;
    margin-top: -80px;
    justify-content: ${({ specialScroll }) => (specialScroll ? 'flex-start' : 'center')};
    align-items: ${({ specialScroll }) => (specialScroll ? 'flex-start' : 'center')};
    


    @media screen and (max-width:768px){
        justify-content: flex-start;
        align-items: flex-start;   
    }

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
    margin-top: 10px;
    font-size: 3.5rem;
    margin-left: 50%;
    display: ${({ scrollNav }) => (scrollNav ? 'flex' : 'none')};
    align-items:center;

    text-shadow: -1px 1px 0 #f54242,
                        1px 1px 0 #f54242,
                        1px -1px 0 #f54242,
                        -1px -1px 0 #f54242;
`

export const Title = styled.h1`
    font-size: 60px;
    font-family: 'Abibas';
    color: #202124;
`

export const Subtitle = styled.h1`
    font-size: 1.7rem;
    font-family: 'Monstserrat';
    margin-left: 2%;
    color: #CE1212;

    text-shadow: -1px 1px 0 #CE1212,
                        1px 1px 0 #CE1212,
                        1px -1px 0 #CE1212,
                        -1px -1px 0 #CE1212;
`

export const NavLogo = styled(LinkR)`
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    justify-self: flex-start;
    font-weight: bold;
    text-decoration: none;
    margin-right: auto; 
    margin-left: 0;
    
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width:768px){
        display: block;
        position: absolute;
        top: 3px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #f54242;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    position: absolute;
    list-style: none;
    right: 2rem;

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
    font-size: 18px;

    &.active{
        color: #CE1212;
        transition: color 0.4s ease;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    position:absolute;
    right: 0;
    margin-right: 3%;
    margin-top: ${({ specialScroll }) => (specialScroll ? '20px' : '0%')};;
`