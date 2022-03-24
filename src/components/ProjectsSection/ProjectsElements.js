import styled from "styled-components";


export const ProjectsContainer = styled.div`
    margin: auto;
    width: 100%;
    background: #1c1c1c;
    padding-bottom: 15vh;
`

export const ProjectsWrapper = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: auto auto auto;

    @media screen and (max-width: 1500px){
        grid-template-columns: repeat(auto-fit,minmax(18rem,20rem));
    }   
`

export const ProjectsTitle = styled.h1`
    font-family: 'Inconsolata';
    font-size: 49px;
    color: #8f8146;
    text-align: center;
    margin-bottom: 5%;

    @media screen and (max-width:900px){
        font-size: 32px;
}
`

export const TextWrapper = styled.div`
    margin-top:15px;
`

export const CardFrontText = styled.p`
    vertical-align:middle;
    margin-top:10px;
    font-size: 25px;
    font-family: 'Inconsolata';
    font-weight: bold;
    color: white;
`
export const CardFrontSubtitle = styled.p`
    vertical-align:middle;
    margin-top:5px;
    font-size: 23px;
    font-family: 'Inconsolata';
    color:white;
`

export const CardBackText = styled.p`
    margin-left:15px;
    margin-top:10px;
    font-size: 25px;
    font-family: 'Inconsolata';
    font-weight: bold;
    height: 50%;
    color:white;
`

export const CardImage = styled.div`
    height: 200px;
    
    @media (max-width: 1500px) {
          width: 300px
    }
`
export const Image = styled.img`
    height: 200px;
    @media (max-width: 1500px) {
        width: 300px
    }
`
export const BackIcon = styled.div`
    font-size: 4rem;
    text-align: center;
    color:white;
`
