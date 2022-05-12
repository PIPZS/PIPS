import React from 'react'
import { FooterContainer, FooterWrap, LeftContainer, RightContainer, Title, Subtitle, SocialMediaWrapper, SocialMediaItem, SocialLinks, AlternativeLinks} from './FooterElements'
import {FiLinkedin, FiInstagram, FiTwitter} from 'react-icons/fi'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    

    const toggleHome = () =>{
        scroll.scrollToTop();
    };

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <SocialMediaWrapper>
                    <LeftContainer>
                            <Title alt to='/' onClick={toggleHome}>PIPS LAB</Title>
                            <Subtitle>Desafiando el statu quo</Subtitle>
                        </LeftContainer>
                        <RightContainer>
                            <SocialLinks>
                                <SocialMediaItem onClick={() => window.location='https://www.linkedin.com/company/labpips/'} target='_blank' aria-label='Facebook'>LINKEDIN</SocialMediaItem>
                                <SocialMediaItem href='/' target='_blank' aria-label='LinkedIn'>TWITTER</SocialMediaItem>
                                <SocialMediaItem onClick={() => window.location='https://www.instagram.com/lab_pips/'} target='_blank' aria-label='Facebook'>INSTAGRAM</SocialMediaItem>
                            </SocialLinks>
                        </RightContainer>
                        <AlternativeLinks>
                            <SocialLinks>
                                <SocialMediaItem onClick={() => window.location='https://www.linkedin.com/company/labpips/'} target='_blank' aria-label='Facebook' alt><FiLinkedin/></SocialMediaItem>
                                <SocialMediaItem href='/' target='_blank' aria-label='LinkedIn' alt><FiTwitter/></SocialMediaItem>
                                <SocialMediaItem onClick={() => window.location='https://www.instagram.com/lab_pips/'} target='_blank' aria-label='Facebook' alt><FiInstagram/></SocialMediaItem>
                            </SocialLinks>
                        </AlternativeLinks>
                    </SocialMediaWrapper>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer