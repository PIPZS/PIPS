import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarLink, SidebarRoute, SidebarWrapper, SidebarMenu, AlternativeLinks, SocialLinks, SocialMediaItem, DivisionLine} from './SidebarElements'
import {FiLinkedin, FiInstagram, FiTwitter} from 'react-icons/fi'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' smooth={true} duration={500} spy={true} exact={true} offset={-80} onClick={toggle}>
                        Nosotros
                    </SidebarLink>
                    <SidebarLink to='services' smooth={true} duration={500} spy={true} exact={true} offset={-68}  onClick={toggle}>
                        Servicios
                    </SidebarLink>
                    <SidebarLink to='contact' smooth={true} duration={500} spy={true} exact={true} offset={-68}  onClick={toggle}>
                        Contacto
                    </SidebarLink>
                </SidebarMenu>
                <DivisionLine></DivisionLine>
                <AlternativeLinks>
                            <SocialLinks>
                                <SocialMediaItem onClick={() => window.location='https://www.linkedin.com/company/labpips/'} target='_blank' aria-label='Facebook' alt><FiLinkedin/></SocialMediaItem>
                                <SocialMediaItem href='/' target='_blank' aria-label='LinkedIn' alt><FiTwitter/></SocialMediaItem>
                                <SocialMediaItem onClick={() => window.location='https://www.instagram.com/lab_pips/'} target='_blank' aria-label='Facebook' alt><FiInstagram/></SocialMediaItem>
                            </SocialLinks>
                </AlternativeLinks>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
