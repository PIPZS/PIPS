import React, { useState, useEffect } from 'react';
import {SwitchContainer, SwitchWrapper, SwitchBGC, ButtonSwitch} from "./SwitchElements"

const Switch = (props) => {
  
    const[position, setPosition] = useState(false);

    const changeMode = () => {
        if(props.theme === 'light'){
            props.setTheme('dark');
            changePosition();
        }
        else{
            props.setTheme('light')
            changePosition();
        }
    }
    
    const changePosition = () =>{
        setPosition(!position);
    }

    const [specialScroll, setSpecialScroll] = useState(false)

    const[theme, setTheme] = useState('light')

    const changeNav = () => {
        if(window.scrollY >= document.documentElement.clientHeight - 80){
            setSpecialScroll(true)
        }else{
            setSpecialScroll(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (

    <SwitchContainer specialScroll={specialScroll}>
        <SwitchWrapper>
            <SwitchBGC>
                <ButtonSwitch onClick={() => changeMode()} position={position} ></ButtonSwitch>
            </SwitchBGC>
        </SwitchWrapper>
    </SwitchContainer>
  )
}

export default Switch