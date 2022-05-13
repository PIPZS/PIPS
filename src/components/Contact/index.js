import React, {useState} from 'react'
import { ContactContainer, ContactWrapper, ContactTitle, ContactForm, ContactInput, ContactFormButton, TextWrapper, Subtitle, GeneralWrapper, ContactOption, OptionWrapper, OptionTextWrapper, OptionTitle, OptionInfo, ContactArea, GeneralError, Label} from './ContactElements'
import {FiSmartphone} from "react-icons/fi";
import {FiMail} from "react-icons/fi";
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
        <script type="text/javascript" src="./formValidations.js"/>
            <ContactContainer id={'contact'}>
                <GeneralWrapper>
                <TextWrapper>
                    <ContactTitle>COMUNICATE CON NOSTROS</ContactTitle>
                    <Subtitle>Contanos sobre vos y encontraremos la mejor opción para tu proyecto. ¿No te gusta llenar formularios?
                        Envianos un correo electrónico a team@pipslab.co
                    </Subtitle>
                    <ContactOption>
                        <OptionWrapper>
                            <FiSmartphone/>
                            <OptionTextWrapper>
                                <OptionTitle>LLAMANOS AL</OptionTitle>
                                <OptionInfo>+5491168007357</OptionInfo>
                            </OptionTextWrapper>
                        </OptionWrapper>
                        <OptionWrapper>
                            <FiMail/>
                            <OptionTextWrapper>
                                <OptionTitle>ENVIANOS UN CORREO</OptionTitle>
                                <OptionInfo>team@pipslab.co</OptionInfo>
                            </OptionTextWrapper>
                        </OptionWrapper>
                    </ContactOption>
                </TextWrapper>
                <ContactWrapper>
                    <ContactForm id="form" onSubmit={sendEmail}> 
                        <GeneralError id="error"></GeneralError>
                        <ContactInput id="name" type="text" name="name" placeholder={'Nombre'} required></ContactInput>
                        <ContactInput id="phone" type="numner" name="phone" placeholder={'Teléfono'} required></ContactInput>
                        <ContactInput id="email" type="email" name="email" placeholder={'Email'} required></ContactInput>
                        <ContactInput id="company" type="text" name="company" placeholder={'Empresa'}></ContactInput>
                        <ContactArea  id="message" name="message" placeholder={'Mensaje'} required></ContactArea>
                        <ContactFormButton>Enviar</ContactFormButton>
                    </ContactForm>
                </ContactWrapper>
                </GeneralWrapper>
            </ContactContainer>
            
        </>
    )
}

export default ContactSection
