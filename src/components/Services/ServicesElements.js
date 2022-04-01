import styled from "styled-components";

export const MainWrapper = styled.div`
    background: ${({theme}) => theme.bgc};
    position:absolute;

`;


export const Section =  styled.div`
    height: 800px;
    width:100% ;
    position: absolute;
    background-color: black;
    border: 1px solid red;
`;
