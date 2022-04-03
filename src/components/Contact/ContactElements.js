import styled from "styled-components";


export const ContactContainer = styled.div`
    background: white;
    padding: 0 24px;
    height: 100vh;
    position: relative;
    border-top: 1px dashed black;
    overflow: auto;
`

export const GeneralWrapper = styled.div`
    width: 90%;
    margin:auto;
    display: flex;
    padding-top:5%;
    height:80%;
    position:relative;
    

    @media screen and (max-width:900px){
        display: flex;
        flex-direction:column;
    }
`

export const ContactTitle = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    color: black;
    margin-bottom:4%;
    word-wrap: break-word;

    @media screen and (max-width:900px){
        font-size: 32px;
}
    @media screen and (max-width:420px){
        font-size: 25px;
    }
`

export const TextWrapper = styled.div`
    width: 50%;

    @media screen and (max-width:900px){
        width: 100%;
    }
`
export const Subtitle = styled.p`
    color: black;
    font-size: 1.4rem;
    width:90%;
`

export const ContactWrapper = styled.div`
    display: flex;
    width: 50%;

    @media screen and (max-width:900px){
        width: 100%;
        margin-top: 10%;
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
    margin-bottom: 5%;
    border: 1px solid rgba(0,0,0,0.3);
    padding: 10px;
    background: transparent;
    height: 50px;
`

export const ContactFormButton = styled.button`
    background: red;
    text-align:center;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    width: 10rem;
    height: 4rem;
    margin-top: 10px;
    padding: 15 px 0px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: black;
    }
`

export const ContactOption = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
`

export const OptionWrapper = styled.div`
    display: flex;
    margin-bottom: 3rem;

    svg{
        color:red;
        font-size: 2.5rem;
        margin-right: 2rem;
    }
`

export const OptionTextWrapper = styled.div`
    display: flex;
    flex-direction: column;

`
export const OptionTitle = styled.h3`
    font-size: 1.3rem;
`

export const OptionInfo = styled.div`
    font-size: 1.3rem;
`
