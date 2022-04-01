import React, {useState} from 'react';
import styled from "styled-components";
import Navbar from '../Navbar/index.js';
import {HomeContainer, Title, Subtitle, TextContainer} from './HomeElements.js';
import './Home.css';
import Image from '../../images/PIPS.jpg';
import VideoUrl from '../../videos/home_video_number_two.mp4';


const Background = styled.div`
    display:flex;
    min-height: 100vh;
    flex-direction: column;
    background-image: url(${Image});
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;
`;

const MainWrapper = styled.div`
    display: flex;
    justify-content:center;
    flex: 1;
`;


const Video = styled.video`
    position: fixed ;
    right:0;
    bottom:0;
    min-width:100%;
    min-height: 100%;
    opacity: 0.2 ;
    
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
                <span className='text'>PIPS</span>
            </MainWrapper>

        </Background>

    )
}


export default HomeSection
