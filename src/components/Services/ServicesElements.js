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
        color: white; 


        h3{
            color:white;
        }

        p{
            color:white;
        }
    }
    

    // Con esto se modifica el tamaño de las tarjetas
    
    // @media screen and (max-width: 700px){
    //     width: 300px;
    //     height: 300px;
    //     margin: auto;
    // } 
    // @media screen and (max-width: 500px){
    //     width: 80vw;
    //     height: 80vw;
    //     margin: auto;
    // } 
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
`
export const CardsSubtitle = styled.p`
    font-size: 1.5rem;
    margin-top: 1rem;
    font-family: var(--font); 
    color: ${({theme}) => theme.text};
`