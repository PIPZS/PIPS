import styled from "styled-components";


export const ServicesContainer = styled.div`
    background: #1c1c1c;
    border-top: 1px dashed black;
    position:relative;
    height:100vh;
`

export const ServicesWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    margin-left: auto;
    margin-right: auto;
    left:0;
    right:0;
    width: 85%;
    margin-bottom: 1%;   
    border-bottom: 1px solid grey;

    @media screen and (max-width:1100px){
        margin-bottom: 7%;
    }
    @media screen and (max-width:650px){
        margin-bottom: 15%;
    }
    @media screen and (max-width:400px){
        width: 300px;
    }
`

export const ServiceTitle = styled.h1`
    font-family: 'Inconsolata';
    font-size: 49px;
    color: #f54242;
    margin-bottom: 5%;
    padding-top:50px;
    margin-left:5%;

    @media screen and (max-width:1300px){
        margin-bottom: 8%;
    }
    

    @media screen and (max-width:500px){
        font-size: 32px;
}
`

export const Service = styled.div`
    width: 500px;
    @media screen and (max-width:1300px){
        width: 300px;
    }

`
export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    color: white;
    font-size: 55px;
    display: inline-block;
    word-wrap: break-word;

    @media screen and (max-width:1300px){
        font-size: 45px;
    }

    @media screen and (max-width:650px){
        font-size: 30px;
    }

    
`
export const Subtitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    color:white;
    opacity: 0.5;
    margin-top: 1%;
`
export const ServiceDescription = styled.div`
    margin:auto;
    width: 500px;

    @media screen and (max-width:1300px){
        width: 300px;
    }

    @media screen and (max-width:1100px){
        display: none;
    }
`
export const Description = styled.p`
    color:white;
    font-size: 20px;
    opacity: 0.8;
    margin-bottom: 4%;

`
export const ServiceDuration = styled.div`
    margin: auto;
    width: 90px;

    @media screen and (max-width:500px){
        display: none;
    }
`
export const Duration = styled.p`
    color:white;
    font-size: 20px;
    opacity: 0.8;
    text-align:center;
`