import React, {useState} from 'react'
import { ContactContainer, ContactWrapper, ContactTitle, ContactForm, ContactInput, ContactFormButton, TextWrapper, Subtitle, GeneralWrapper, ContactOption, OptionWrapper, OptionTextWrapper, OptionTitle, OptionInfo} from './ContactElements'
import {BsPhone} from "react-icons/bs";
import {IoMailOutline} from "react-icons/io5";
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
                    <ContactTitle>COMUNIQUESE CON NOSTROS</ContactTitle>
                    <Subtitle>No seas timido, solo cuantanos sobre ti y encontraremos la mejor opcion para ti y tu proyecto. ¿No te gusta llenar formularios?
                        Envíenos un correo electrónico directamente y luego hola@pipslab.co
                    </Subtitle>
                    <ContactOption>
                        <OptionWrapper>
                            <BsPhone/>
                            <OptionTextWrapper>
                                <OptionTitle>LLAMANOS AL</OptionTitle>
                                <OptionInfo>+5491168007357</OptionInfo>
                            </OptionTextWrapper>
                        </OptionWrapper>
                        <OptionWrapper>
                            <IoMailOutline/>
                            <OptionTextWrapper>
                                <OptionTitle>ENVIANOS UN CORREO</OptionTitle>
                                <OptionInfo>hola@pipslab.co</OptionInfo>
                            </OptionTextWrapper>
                        </OptionWrapper>
                    </ContactOption>
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
