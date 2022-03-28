import styled from "styled-components";

export const SwitchContainer = styled.div`
    width:20%;
    background-color: inherit;
    display: flex; 
    font-size: 1rem;
    top: 25px;
    float:right;
    z-index:31;
    margin-right:50px;
    position:sticky;
    margin-top: -80px;
    margin-left: 200px;

    @media screen and (max-width: 768px){
        margin-right: 100px;
    } 
`

export const SwitchWrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    margin:auto;
    display:flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
`
export const SwitchBGC = styled.div`
    position: relative;
    width: 70px;
    height: 30px;
    border-radius: 30px;
    background-color: ${({theme}) => theme.toggle};
    transition: 1s all ease-in;

`
export const ButtonSwitch = styled.button`
    position: absolute;
    cursor: pointer;
    bottom:5px;
    left: ${({position}) => position ? '38px' : '5px'};
    top: ${({position}) => position ? '0' : ''};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    transition: 0.2s all ease-out;
    border:none;
    background-color: ${({position}) => position ? 'transparent' : 'white'} ;
    border-radius:50%;
    box-shadow:${({position}) => position ? '5px 5px 0 0 white' : 'none'} ;
    
`