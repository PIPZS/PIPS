import React from 'react';
import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';



export const LinkButton = styled(LinkS)`
    background-color: #CE1212;
    border: none;
    color: ${({theme}) => theme.text};
    padding: 2%;
    font-size: 1.5rem;
    word-wrap: break-word;
    color:white;
    bottom: 5rem;
    font-family: var(--font);
    

    &:hover{
        background: ${({theme}) => theme.text};
        color: ${({theme}) => theme.bgc};
        cursor:pointer;
    }
`



export const Button = () => {
  return (
    
    <LinkButton/>

  )
}
