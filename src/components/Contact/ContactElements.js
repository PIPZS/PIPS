import styled from "styled-components";


export const ContactContainer = styled.div`
    background: #1c1c1c;
    padding: 0 24px;
    height: 860px;
    position: relative;
    border-top: 1px dashed black;
`

export const GeneralWrapper = styled.div`
    width: 90%;
    margin:auto;
    display: flex;
    padding-top:5%;

    @media screen and (max-width:900px){
        display: flex;
        flex-direction:column;
    }
`

export const ContactTitle = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 45px;
    color: #f54242;
    margin-bottom:3%;

    @media screen and (max-width:900px){
        font-size: 32px;
}
`

export const OtherContacts = styled.div`
    color:white;
    font-size: 25px;
`
export const OtherContactsTitle = styled.p`
    color:white;
    font-size: 18px;
    opacity: 0.8;
`
export const TextWrapper = styled.div`
    width: 50%;

    @media screen and (max-width:900px){
        width: 100%;
    }
`
export const Subtitle = styled.p`
    color:white;
    opacity: 0.8;
    font-size: 18px;
`
export const Mail = styled.p`
    color:white;
    font-size: 28px;
    margin-bottom: 3%;
`

export const IconWrapper = styled.div`
    font-size: 8rem;
    color: white;
`

export const ContactWrapper = styled.div`
    display: flex;
    width: 50%;

    @media screen and (max-width:900px){
        width: 100%;
    }
`

export const ContactForm = styled.form`
    width: 100%;
    margin-left: 10%;

    @media screen and (max-width:900px){
        width: auto;
        margin: auto;
    }
`

export const ContactInput = styled.input`
    width: 90%;
    margin-bottom: 3%;
    border: none;
    padding: 10px;
    border-bottom: 1.5px solid white;
    background: transparent;
    height: 50px;
`

export const ContactFormButton = styled.button`
    background: transparent;
    padding: 14px 100px;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    border: 1px solid white;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-top: 10px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: white;
        color: black;
        border: 1px solid #f9f9f9;
    }
`