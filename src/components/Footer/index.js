import React from 'react'
import { FooterContainer, FooterWrap, FooterInfo, LeftContainer, RightContainer, Title, Subtitle, SocialMediaWrapper, SocialMediaItem, SocialLinks} from './FooterElements'
import {FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    };

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterInfo>
                        <LeftContainer>
                            <Title>PIPS LAB</Title>
                            <Subtitle>Desafiando el status quo</Subtitle>
                        </LeftContainer>
                        <RightContainer>
                            <Title>HABLEMOS!</Title>
                            <Subtitle>hola@pipslab.co</Subtitle>
                        </RightContainer>
                    </FooterInfo>
                    <SocialMediaWrapper>
                        <LeftContainer>
                            <Subtitle>Buenos Aires, Argentina</Subtitle> 
                        </LeftContainer>
                        <RightContainer>
                            <SocialLinks>
                                <SocialMediaItem href='/' target='_blank' aria-label='Facebook'>LINKEDIN</SocialMediaItem>
                                <SocialMediaItem href='/' target='_blank' aria-label='LinkedIn'>TWITTER</SocialMediaItem>
                                <SocialMediaItem href='/' target='_blank' aria-label='Facebook'>INSTAGRAM</SocialMediaItem>
                            </SocialLinks>
                        </RightContainer>
                    </SocialMediaWrapper>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer