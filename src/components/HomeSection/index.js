import React, {useState} from 'react';
import styled from "styled-components";
import Navbar from '../Navbar/index.js';
import {HomeContainer, Title, Subtitle, TextContainer} from './HomeElements.js';
import './Home.css';
import Image from '../../images/PIPS.jpg';


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


const HomeSection = () => {


    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
      <Background>
                
                <MainWrapper >
                    <span className='text'>PIPS</span>
                </MainWrapper>

            </Background>

    )
}

export default HomeSection
