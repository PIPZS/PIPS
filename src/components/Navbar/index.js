import React, {useState, useEffect} from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu, NavIcon, Title} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)
    const [specialScroll, setSpecialScroll] = useState(false)

   

    const changeNav = () => {

        if(window.scrollY >= 0){
            setScrollNav(false)
        }if(window.scrollY >= document.documentElement.clientHeight - 80){
            setScrollNav(true);
            setSpecialScroll(true)
        }else{
            setSpecialScroll(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop();
    };

    return (
        <>
        <Nav scrollNav={scrollNav} specialScroll={specialScroll}>
            <NavbarContainer>
                <NavLogo to='/'  onClick={toggleHome} scrollNav={scrollNav}>
                    <NavIcon scrollNav={scrollNav}>
                        <Title>PIPS</Title>
                    </NavIcon>
                </NavLogo>
                <MobileIcon scrollNav={scrollNav} onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact={true} offset={-80} scrollNav={scrollNav}>NOSOTROS</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" smooth={true} duration={500} spy={true} exact={true} offset={-70} scrollNav={scrollNav}>SERVICIOS</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact' smooth={true} duration={500} spy={true} exact={true} offset={-60} scrollNav={scrollNav} specialScroll={specialScroll}>CONTACTO</NavLinks>
                    </NavItem>
                </NavMenu>
                
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
