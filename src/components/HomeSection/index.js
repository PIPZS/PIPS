import React, {useState} from 'react';
import styled from "styled-components";
import {Title, ScrollDown} from './HomeElements.js';
import './Home.css';
import VideoUrl from '../../videos/videoedificios.mp4';
import VideoUrlWebm from '../../videos/videoedificios.webm'



const Background = styled.div`
    height: 100vh;
    background-color: #161616;
    top:0;
    left: 0;
`;

const MainWrapper = styled.div`
    display: flex;
    justify-content:center;
    flex: 1;
`;


const Video = styled.video`
  
  object-fit: cover;
  height: 100vh;
  width  : 100vw;
  max-width: 100%;
  top: 0;
  left: 0;
  opacity: 1;
    
    
`;

const HomeSection = () => {

    
    const [isOpen, setIsOpen] = useState(false)
    

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
      <Background>
            <Video id="myVideo"  autoPlay="autoplay"  loop="loop" preload="auto"  muted playsInline>
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
