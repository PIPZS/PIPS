import React from 'react'
import { ContactContainer, ContactWrapper, ContactTitle, ContactForm, ContactInput, ContactFormButton, TextWrapper, Subtitle, Mail, OtherContacts, OtherContactsTitle, GeneralWrapper, IconWrapper} from './ContactElements'
import {BsArrowRight} from "react-icons/bs";

const ContactSection = () => {
    return (
        <>
            <ContactContainer id={'contact'}>
                <GeneralWrapper>
                <TextWrapper>
                    <ContactTitle>Necesitas alguno de nuestros servicios?</ContactTitle>
                    <Subtitle>Envianos una solicitus o dejanos un mensaje:</Subtitle>
                    <Mail>team@pips.com</Mail>
                    <IconWrapper>
                        <BsArrowRight/>
                    </IconWrapper>
                    <OtherContactsTitle>Medios de comunicacion:</OtherContactsTitle>
                    <OtherContacts>Telegram</OtherContacts>
                    <OtherContacts>Whatsapp</OtherContacts>
                </TextWrapper>
                <ContactWrapper>
                    <ContactForm>
                        <ContactInput placeholder={'Nombre'}></ContactInput>
                        <ContactInput placeholder={'Telefono'}></ContactInput>
                        <ContactInput placeholder={'Email'}></ContactInput>
                        <ContactInput placeholder={'Empresa'}></ContactInput>
                        <ContactInput placeholder={'Mensaje'}></ContactInput>
                        <ContactFormButton>Enviar</ContactFormButton>
                    </ContactForm>
                </ContactWrapper>
                </GeneralWrapper>
            </ContactContainer>
            
        </>
    )
}

export default ContactSection
