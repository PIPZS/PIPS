import {Link as LinkS} from 'react-scroll';
import Image from '../../images/PIPS.jpg';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const animation = keyframes`${fadeIn}`;

export const HomeContainer = styled.div`
    position: relative;
    height: 900px;
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
    animation: 5s ${animation};
`
export const Subtitle = styled.h2`
    font-size: 0.9rem;  
    color: #f54242;
`

export const ScrollDown = styled(LinkS)`
    &:hover{
        cursor: pointer;
    }
`