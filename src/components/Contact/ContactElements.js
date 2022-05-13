import styled from "styled-components";


export const ContactContainer = styled.div`
    background: ${({theme}) => theme.bgc};
    padding: 0 24px;
    position: relative;
    overflow: hidden;
`

export const GeneralWrapper = styled.div`
    width: 80%;
    margin:auto;
    display: flex;
    padding-top:5%;
    height:80%;
    position:relative;
    margin-bottom: 5%;
    

    @media screen and (max-width:900px){
        display: flex;
        flex-direction:column;
    }
`

export const ContactTitle = styled.h1`
    font-family: var(--font); 
    font-size: 20px;
    color: ${({theme}) => theme.toggle};
    margin-bottom:1rem;
    word-wrap: break-word;

    @media screen and (max-width:900px){
        font-size: 20px;
}
    @media screen and (max-width:420px){
        font-size: 20px;
    }
`

export const TextWrapper = styled.div`
    width: 50%;

    @media screen and (max-width:900px){
        width: 100%;
    }
`
export const Subtitle = styled.p`
    color: ${({theme}) => theme.text};
    font-size: 17px;
    width:90%;
    font-family: var(--font); 
    word-wrap: break-word;
    
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
    width: 100%;
    margin-bottom: 5%;
    border: 1px solid ${({theme}) => theme.input};
    padding: 10px;
    background: transparent;
    font-family: var(--font);
    font-size: 1.1rem;
    color: white;
    height: 50px;
    outline: none;
`

export const ContactArea = styled.textarea`
    width: 100%;
    margin-bottom: 5%;
    border: 1px solid ${({theme}) => theme.input};
    padding: 10px;
    background: transparent;
    font-family: var(--font);
    font-size: 1.1rem;
    color: white;
    height: 200px;
    resize: none;
    outline: none;
`

export const ContactFormButton = styled.button`
    background: #1c1c1c;
    text-align:center;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color:#FC5757;
    width: 10rem;
    height: 3.5rem;
    margin-top: 5px;
    font-family: var(--font);
    text-transform:uppercase ;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({theme}) => theme.toggle};
        cursor:pointer;
        color:white;
    }

    @media screen and (max-width:900px){
        margin-bottom: 18rem;
    }
`

export const ContactOption = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;

    @media screen and (max-width:900px){
        position: absolute;
        bottom: 0;
    }

`

export const OptionWrapper = styled.div`
    display: flex;
    margin-bottom: 3rem;

    svg{
        color: ${({theme}) => theme.toggle};
        font-size: 2.5rem;
    }
`

export const OptionTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;

`
export const OptionTitle = styled.h3`
    font-size: 17px;
    font-family: var(--font); 
    color: ${({theme}) => theme.text};

    @media screen and (max-width:400px){
        font-size: 20px;
        word-break: break-all;
    }

`

export const OptionInfo = styled.div`
    font-size: 17px;
    font-family: var(--font); 
    color: ${({theme}) => theme.text};

    @media screen and (max-width:400px){
        font-size: 4.6vw;
        word-break: break-all;
    }
`

export const GeneralError = styled.p`
    color:red;
`

export const Label = styled.div`
    color: red;
`