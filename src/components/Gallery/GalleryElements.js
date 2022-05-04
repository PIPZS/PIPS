import styled from "styled-components";



export const Background = styled.div`
    background: ${({theme}) => theme.bgc};
    position:relative;
   
`;



export const GalleryContainer = styled.div`
    margin: auto;
    width: 60%;
    background: ${({theme}) => theme.bgc} ;

    @media screen and (max-width: 1000px){

        width: 80%;
        
    }  
    
    
`

export const GalleryTitle = styled.h1`

    font-size: 20px;
    font-family: var(--font);
    color: #FC5757;
    text-align: center;
    margin-bottom: 5%;

    @media screen and (max-width:900px){
        font-size: 32px;
    }

`