import styled from "styled-components";


export const InfoContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    padding: 0 24px;
    height: 100vh;
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

    @media screen and (max-width:900px){
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

export const InfoText = styled.p`
    margin-top: 3%;
    color: white;
    font-size: 1.5em;
`

export const InfoCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: 20vw 20vw;
    grid-row: 20vw 20vw;
    grid-column-gap: 10px;
    grid-row-gap: 20px;
    width: 70%;
    height: 70%;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1500px){
        grid-template-columns: repeat(auto-fit,minmax(18rem,20rem));
    }    
      
    @media screen and (max-width: 1200px){
        width: 80%;
        margin: auto;
    }      
`

export const CardFrontText = styled.div`
    margin-top: 10%;
    font-size: 2rem;
`

export const CardBackText = styled.div`
    font-size: 1.3rem;
    width: 90%;
    margin: auto;
    margin-top: 10%;
    text-align: center;
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