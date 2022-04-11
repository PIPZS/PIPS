import styled from "styled-components";

export const MainWrapper = styled.div`
    background: ${({theme}) => theme.bgc};
    position: relative;
    padding: 0px 24px;
`;


export const CardsWrapper = styled.div`
    display:flex;
    width: 90%;
    justify-content: center;
    margin: auto;
    margin-top: 3rem;
    padding-bottom: 10rem;

    @media screen and (max-width: 1000px){
        flex-direction:column ;
        width: 50%;
        gap: 20px;
    }  

    @media screen and (max-width: 750px){
        flex-direction:column ;
        width: 90%;
    }  
`
export const Card = styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    text-align: center;
    padding: 20px;
    padding-top: 50px;
    color: #363636;
    height: 25rem;
    border: 0.3px solid #CE1212;
    overflow: hidden ;
    width:100%;
    
    svg {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
        color: #CE1212;

        @media screen and (max-width: 450px){
            font-size: 15vw;
            margin-bottom: 5%;
        } 
    }

    // Con esto se modifica el tamaño de las tarjetas
    
    @media screen and (max-width: 1000px){
        width: 380px;
        height: 380px;
        margin: auto;
    } 
    @media screen and (max-width: 500px){
        width: 75vw;
        height: 75vw;
        margin: auto;
        padding-top: 10%;
    } 
`

export const CardTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-family: var(--font);
    color: ${({theme}) => theme.text};
    text-transform: uppercase;

    @media screen and (max-width: 450px){
        font-size: 1.1em;
        margin-bottom: 5%;
    } 

`

export const CardText = styled.p`
    font-size: 1.1rem;
    width: 100%;
    font-family: var(--font); 
    color: ${({theme}) => theme.text};

    @media screen and (max-width: 450px){
        font-size: 70%;
    } 
`

export const CardsTextWrapper = styled.div`
    margin-top: 10rem;
    text-align: center;
    @media screen and (max-width: 1250px) {
        margin-top: 10rem;
    }
`

export const CardsTitle = styled.h3`
    font-size: 1.8rem;
    font-family: var(--font); 
    color: ${({theme}) => theme.text};
    word-wrap: break-word;
`
export const CardsSubtitle = styled.p`
    font-size: 1.5rem;
    margin-top: 1rem;
    font-family: var(--font); 
    color: ${({theme}) => theme.text};
    word-wrap: break-word;
`