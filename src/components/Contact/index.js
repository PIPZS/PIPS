import React, {useState} from 'react'
import { ContactContainer, ContactWrapper, ContactTitle, ContactForm, ContactInput, ContactFormButton, TextWrapper, Subtitle, Mail, OtherContacts, OtherContactsTitle, GeneralWrapper, IconWrapper} from './ContactElements'
import {BsArrowRight} from "react-icons/bs";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_i0bpong', 'template_2f0qlca', e.target, 'ayNZMpkIEuMkbqdMA')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };
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
                    <ContactForm onSubmit={sendEmail}> 
                        <ContactInput type="text" name="user_name" placeholder={'Nombre'}></ContactInput>
                        <ContactInput placeholder={'Telefono'}></ContactInput>
                        <ContactInput type="email" name="user_email" placeholder={'Email'}></ContactInput>
                        <ContactInput placeholder={'Empresa'}></ContactInput>
                        <ContactInput name="message" placeholder={'Mensaje'}></ContactInput>
                        <ContactFormButton>Enviar</ContactFormButton>
                    </ContactForm>
                </ContactWrapper>
                </GeneralWrapper>
            </ContactContainer>
            
        </>
    )
}

export default ContactSection
