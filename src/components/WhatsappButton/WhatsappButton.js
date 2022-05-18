import React, { useEffect, useState } from 'react'
import { ButtonWrapper } from './WhatsappButtonElements'
import FloatingWhatsApp from 'react-floating-whatsapp'


function WhatsappButton() {

    const [specialScroll, setSpecialScroll] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= document.documentElement.clientHeight - 1000){
            setSpecialScroll(true)
        }else{
            setSpecialScroll(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const redirect = () => {
        window.location.href = "https://wa.me/1154552769";
    }

    return (
        <ButtonWrapper specialScroll={specialScroll} >
        <FloatingWhatsApp
                    phoneNumber="541154552769"
                    accountName="PIPS"
                    allowClickAway
                    darkMode
                    notification
                    chatMessage="Hola, ¿qué tal? Quisiera una página web."
                    statusMessage=""
                    notificationDelay={30000} // 1 minute
        />
        </ButtonWrapper>
    )
}

export default WhatsappButton