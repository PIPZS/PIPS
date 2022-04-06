import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';



export const MainWrapper = styled.div`
    background: ${({theme}) => theme.bgc};
    position:relative;
`;

export const Wrapper = styled.div`
    top:0;
    left:0;
    height:100%;
    width:100%;
    display: flex;
    flex-direction: column ;
    position:absolute;
`;


export const InfoContainer = styled.div`  
    display: flex;
    justify-content: center;
    padding: 50px 24px;
    position: relative;
    padding-top: 5%;
    align-items:center;

    @media screen and (max-width:1200px){
        display: flex;
        flex-direction: column;
    }
`


export const CarouselContainer = styled.div`

`;


export const InfoWrapper = styled.div`
    justify-content: left;
    width: 50%;
    margin-left: 8%;
    display: flex;
    flex-direction: column;
    position: relative;

    @media screen and (max-width:1200px){
        width: 100%;
        margin-left: 0%;;
        padding-top: 0%;
    }
`

export const InfoTitle = styled.h1`
    font-family: var(--font);  
    font-size: 49px;
    color: #f54242;
    word-wrap: break-word;

    @media screen and (max-width:500px){
        font-size: 8vw;
}
`
export const ContactText = styled.div`
`

export const InfoSubtitle = styled.p`
    font-family: var(--font); 
    color: ${({theme}) => theme.text};
    margin-bottom: 5%;
    position: relative;
    z-index: 20;
    font-weight: ${props => props.bold ? 'bold' : '' };

    @media screen and (max-width:500px){
        font-size: 16px;
    }
`

export const Button = styled(LinkS)`
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

export const InfoText = styled.p`
    color: #f54242;
    font-size: 1.8em;
    word-break: break-all;
    margin-bottom: 5%;
    font-family: var(--font); 

    @media screen and (max-width:500px){
        font-size: 6vw;
}
`

export const InfoImage = styled.img`
    position: absolute;
    height: 50%;
    left: 25%;
    top: 33%;
    z-index: 1;
`

export const InfoCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: 260px 260px;
    grid-template-rows: 260px 260px;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    width: 70%;
    height: 70%;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1200px){
        width: 80%;
        margin: auto;
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

    @media screen and (max-width: 500px){
        display:flex;
        flex-direction:column;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
        margin-top: 50px;
    } 
`
export const CardBody = styled.div`
    border: 1px solid #CE1212;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35) ;
    height: 250px;

    @media screen and (max-width: 700px){
        width: 220px;
        height: 220px;
        margin: auto;
    } 
    @media screen and (max-width: 500px){
        width: 50vw;
        height: 50vw;
        margin: auto;
    } 
`

export const CardFrontText = styled.div`
    margin-top: 20%;
    font-size: 1.8rem;
    color: ${({theme}) => theme.text};
    font-family: var(--font); 

    @media screen and (max-width: 700px){
        font-size: 1.5rem;
    }  
    
    @media screen and (max-width: 500px){
        font-size: 5vw;
    }  
`

export const CardBackText = styled.div`
    font-size: 1.2rem;
    width: 90%;
    margin: auto;
    margin-top: 10%;
    font-family: var(--font); 
    text-align: left;

    @media screen and (max-width: 700px){
        font-size: 0.7rem;
    }  
    
    @media screen and (max-width: 500px){
        font-size: 0.7rem;
    }  
`
export const Text = styled.p`  
    margin-top:5%;
    font-family: var(--font); 
`
export const ImageWrapper = styled.div`
    width: 35%;
    height: 35%;
    margin:auto;   
    
    svg{
        font-size: 5rem;
        color: #CE1212;

        @media screen and (max-width: 700px){
            font-size: 4rem;
        } 
        @media screen and (max-width: 500px){
            font-size: 15vw;
        } 
    }
    
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`

export const Section = styled.div`
    height: 150px;

`;

export const CariuseltextWrapper = styled.div`
    width: 80%;
    margin: auto;
`

export const CarouselTitle = styled.h3`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 1.3rem;
    font-family: var(--font);
    color: ${({theme}) => theme.text};
    text-transform: uppercase;
`

export const CarouselSubtitle = styled.p`
    font-size: 19px;
    font-family: var(--font); 
    color: ${({theme}) => theme.text};
`

export const CardsWrapper = styled.div`
    display:flex;
    width: 90%;
    justify-content: center;
    margin: auto;
    margin-top: 3rem;
    margin-bottom: 10rem;

    @media screen and (max-width: 1000px){
        flex-direction:column ;
        width: 50%;
    }  

    @media screen and (max-width: 750px){
        flex-direction:column ;
        width: 90%;
    }  
`
export const Card = styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    text-align: center;
    padding: 50px;
    transition: 0.3s all ease-out;
    color: #363636;
    height: 25rem;
    border: 0.3px solid #CE1212;
    overflow: hidden ;
    width:100%;
  

 

    svg {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
        color: #CE1212;

    }

    &:hover{
        background: #CE1212;
        color: white; 

        svg{
            color: white
        }

        h3{
            color:white;
        }

        p{
            color:white;
        }
    }
`

export const CardTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-family: var(--font);
    color: ${({theme}) => theme.text};
    text-transform: uppercase;
    
`

export const CardText = styled.p`
    font-size: 1.1rem;
    width: 100%;
    font-family: var(--font); 
    color: ${({theme}) => theme.text};
`

export const CardsTextWrapper = styled.div`
    margin-top: 18rem;
    text-align: center;
    @media screen and (max-width: 1250px) {
        margin-top: 10rem;
    }
`

export const CardsTitle = styled.h3`
    font-size: 1.8rem;
    font-family: var(--font); 
    color: ${({theme}) => theme.text};
`
export const CardsSubtitle = styled.p`
    font-size: 1.5rem;
    margin-top: 1rem;
    font-family: var(--font); 
    color: ${({theme}) => theme.text};
`