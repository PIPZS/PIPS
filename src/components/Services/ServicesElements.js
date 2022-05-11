import styled from "styled-components";

export const MainWrapper = styled.div`
    background: ${({theme}) => theme.bgc};
    position: relative;
    padding: 100px 24px;
    @media screen and (max-width: 1200px){
        padding: 50px 24px;
    } 
`;


export const CardsWrapper = styled.div`
    display:flex;
    width: 70%;
    justify-content: center;
    margin: auto;
    margin-top: 3rem;
    padding-bottom: 3rem;

    @media screen and (max-width: 1350px){
        width: 80%;
    }  

    @media screen and (max-width: 1000px){
        flex-direction:column ;
        width: 90%;
        gap:20px;
    }  
`
export const Card = styled.div`
    text-align: center;
    padding: 20px;
    padding-top: 50px;
    color: #363636;
    height: 25rem;
    border: 0.3px solid ${({theme}) => theme.toggle};
    overflow: hidden ;
    width:100%;
    border-left: ${props => props.alt ? 'none' : '' };
    border-right: ${props => props.alt ? 'none' : '' };
    
    svg {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
        color: ${({theme}) => theme.toggle};

        @media screen and (max-width: 450px){
            font-size: 13vw;
            margin-bottom: 3%;
        } 
    }

    // Con esto se modifica el tamaño de las tarjetas
    
    @media screen and (max-width: 1000px){
        width: 380px;
        height: 380px;
        margin: auto;
        border: 0.3px solid ${({theme}) => theme.toggle};
    } 
    @media screen and (max-width: 500px){
        width: 75vw;
        height: 75vw;
        margin: auto;
        padding-top: 10%;
    } 
`

export const CardTitle = styled.h3`
    font-size: 19px;
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
    font-size: 17px;
    width: 100%;
    font-family: var(--font); 
    color: ${({theme}) => theme.text};

    @media screen and (max-width: 450px){
        font-size: 1rem;
    } 

    @media screen and (max-width: 400px){
        font-size: 0.9rem;
    } 
`

export const CardsTextWrapper = styled.div`
    margin-top: 7rem;
    text-align: center;
    @media screen and (max-width: 1250px) {
        margin-top: 85px;
    }
`

export const CardsTitle = styled.h3`
    font-size: 20px;
    font-family: var(--font); 
    color: #FC5757;
    word-wrap: break-word;
`
export const CardsSubtitle = styled.p`
    font-size: 20px;
    margin-top: 1rem;
    font-family: var(--font); 
    color: white;
    word-wrap: break-word;
`