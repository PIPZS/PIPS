import styled from "styled-components";
import Image from '../../images/PIPS.jpg';

export const HomeContainer = styled.div`
    position: relative;
    height: 100vh;
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
`

export const TextContainer = styled.div`
    display: flex;
    justify-content:center;
    flex: 1;
`

export const Title = styled.h1`
    font-size: 15rem;
    color: #f54242;
`
export const Subtitle = styled.h2`
    font-size: 0.9rem;  
    color: #f54242;
`

