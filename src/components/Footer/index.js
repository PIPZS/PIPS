import React from 'react'
import { FooterContainer, FooterWrap, FooterInfo, LeftContainer, RightContainer, Title, Subtitle, SocialMediaWrapper, SocialMediaItem, SocialLinks, AlternativeLinks} from './FooterElements'
import {FiLinkedin, FiInstagram, FiTwitter} from 'react-icons/fi'

const Footer = () => {


    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterInfo>
                        <LeftContainer>
                            <Title alt>PIPS LAB</Title>
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