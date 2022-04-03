import React, { useEffect, useState } from 'react'
import { ButtonWrapper } from './WhatsappButtonElements'
import FloatingWhatsApp from 'react-floating-whatsapp'


function WhatsappButton() {

    const [specialScroll, setSpecialScroll] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= document.documentElement.clientHeight - 800){
            setSpecialScroll(true)
        }else{
            setSpecialScroll(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <ButtonWrapper specialScroll={specialScroll}>
        <FloatingWhatsApp
                    phoneNumber="123456789"
                    accountName="Bot"
                    allowClickAway
                    notification
                    notificationDelay={60000} // 1 minute
        />
        </ButtonWrapper>
    )
}

export default WhatsappButton