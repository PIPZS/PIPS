import React, {useState} from 'react';
import styled from "styled-components";
import {Title, ScrollDown} from './HomeElements.js';
import './Home.css';
import VideoUrl from '../../videos/videoedificios.mp4';



const Background = styled.div`
    height: 100vh;
    background-color: #202124;
`;

const MainWrapper = styled.div`
    display: flex;
    justify-content:center;
    flex: 1;
`;


const Video = styled.video`
    position: absolute;
    right:0;
    bottom:0;
    min-width: 100%;
    min-height: 100%;
    opacity: 1 ;
    
`;

const HomeSection = () => {

    
    const [isOpen, setIsOpen] = useState(false)
    

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
      <Background>
            <Video id="myVideo"  autoPlay="autoplay" muted="muted" loop="loop" preload="auto">
                <source src={VideoUrl} type="video/mp4"></source>
            </Video>
            <MainWrapper >
                <Title>
                <span className='text'>PIPS</span>
                </Title>

                <ScrollDown to="about" smooth={true} duration={500} spy={true} exact={true} offset={-80}>
                    <div className='scrolldown'>
                        <span></span>
                        <span></span>
                    </div>
                </ScrollDown>
            </MainWrapper>       
        </Background>

    )
}


export default HomeSection
