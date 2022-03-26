import styled from "styled-components";


export const InfoContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    padding: 50px 24px;
    position: relative;
    padding-top 5%;

    @media screen and (max-width:1200px){
        display: flex;
        flex-direction: column;
    }
`

export const InfoWrapper = styled.div`
    justify-content: left;
    width: 50%;
    margin-left: 3%;;

    @media screen and (max-width:1200px){
        width: 100%;
        margin-left: 0%;;
        padding-top: 0%;
    }
`

export const InfoTitle = styled.h1`
    font-family: 'Inconsolata'; 
    font-size: 49px;
    color: #f54242;
    word-wrap: break-word;

    @media screen and (max-width:500px){
        font-size: 8vw;
}
`
export const InfoSubtitle = styled.p`
    font-family: 'Inconsolata'; 
    font-size: 23px;
    color: white;
    margin-top: 3%;

    @media screen and (max-width:500px){
        font-size: 16px;
    }
`

export const InfoText = styled.p`
    margin-top: 3%;
    color: white;
    font-size: 1.8em;
    word-break: break-all;

    @media screen and (max-width:500px){
        font-size: 6vw;
}
`

export const InfoCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: 310px 310px;
    grid-template-rows: 310px 310px;
    grid-column-gap: 10px;
    grid-row-gap: 20px;
    width: 70%;
    height: 70%;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1200px){
        width: 80%;
        margin: auto;
        margin-bottom: 5%;
        margin-top: 5%;
    }   

    @media screen and (max-width: 700px){
        grid-template-columns: 230px 230px;
        grid-template-rows: 230px 230px;
    }  
    
    @media screen and (max-width: 500px){
        grid-template-columns: 40vw 40vw;
        grid-template-rows: 40vw 40vw;
    }

    @media screen and (max-width: 400px){
        display:flex;
        flex-direction:column;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
    } 
`

export const CardFrontText = styled.div`
    margin-top: 10%;
    font-size: 2rem;

    @media screen and (max-width: 700px){
        font-size: 1.7rem;
    }  
    
    @media screen and (max-width: 500px){
        font-size: 5vw;
    }  
`

export const CardBackText = styled.div`
    font-size: 1.3rem;
    width: 90%;
    margin: auto;
    margin-top: 10%;
`
export const Text = styled.p`  
`
export const ImageWrapper = styled.div`
    width: 50%;
    height: 50%;
    margin:auto;    
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`