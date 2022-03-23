import styled from "styled-components";


export const InfoContainer = styled.div`
    background: #1c1c1c;
    display: flex;
    justify-content: center;
    padding: 0 24px;
    height: 100vh;
    position: relative;

    @media screen and (max-width:700px){
        display: flex;
        flex-direction: column;
    }
`

export const InfoWrapper = styled.div`
    justify-content: right;
    width: 50%;
    padding-top: 8%;

    @media screen and (max-width:700px){
        width: 100%;
        padding-top: 0%;
    }
`

export const InfoTitle = styled.h1`
    font-family: 'Inconsolata'; 
    font-size: 49px;
    color: #f54242;
    word-wrap: break-word;

    @media screen and (max-width:900px){
        font-size: 32px;
}
`
export const InfoSubtitle = styled.p`
    font-family: 'Inconsolata'; 
    font-size: 23px;
    color: white;
    margin-top: 3%;

    @media screen and (max-width:900px){
        font-size: 16px;
    }
`

export const InfoPeople = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 6%;
`

export const InfoPeopleTitle = styled.h2`
    font-family: 'Inconsolata'; 
    font-size: 30px;
    color: #f54242;
    margin-right: 10%;

    @media screen and (max-width:900px){
        font-size: 22px;
    }
`

export const People =  styled.p`
    font-family: 'Inconsolata'; 
    font-size: 1.7vw;
    color: white;
    margin-top: 5px;
    font-weight: lighter;

    @media screen and (max-width:900px){
        font-size: 12px;
    }
`

export const ImageWrapper = styled.div`
    align-items: left;
    margin-top: 10%;
    height:70%;
    margin-right: 10%;
    

    @media screen and (max-width:700px){
        margin:auto; 
        margin-top:15%;
        height:50%;
        margin-bottom:0%;
    }
`

export const Image = styled.img`
    height: 80%;
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

`