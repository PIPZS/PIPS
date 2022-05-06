import React, {useState} from 'react'
import { ContactContainer, ContactWrapper, ContactTitle, ContactForm, ContactInput, ContactFormButton, TextWrapper, Subtitle, GeneralWrapper, ContactOption, OptionWrapper, OptionTextWrapper, OptionTitle, OptionInfo, ContactArea} from './ContactElements'
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
            <ContactContainer id={'contact'}>
                <GeneralWrapper>
                <TextWrapper>
                    <ContactTitle>COMUNICATE CON NOSTROS</ContactTitle>
                    <Subtitle>Contanos sobre vos y encontraremos la mejor opción para tu proyecto. ¿No te gusta llenar formularios?
                        Envianos un correo electrónico directamente a hola@pipslab.co
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
                                <OptionInfo>hola@pipslab.co</OptionInfo>
                            </OptionTextWrapper>
                        </OptionWrapper>
                    </ContactOption>
                </TextWrapper>
                <ContactWrapper>
                    <ContactForm onSubmit={sendEmail}> 
                        <ContactInput type="text" name="name" placeholder={'Nombre'}></ContactInput>
                        <ContactInput type="numner" name="phone" placeholder={'Telefono'}></ContactInput>
                        <ContactInput type="email" name="email" placeholder={'Email'}></ContactInput>
                        <ContactInput type="text" name="company" placeholder={'Empresa'}></ContactInput>
                        <ContactArea  name="message" placeholder={'Mensaje'}></ContactArea>
                        <ContactFormButton>Enviar</ContactFormButton>
                    </ContactForm>
                </ContactWrapper>
                </GeneralWrapper>
            </ContactContainer>
            
        </>
    )
}

export default ContactSection
