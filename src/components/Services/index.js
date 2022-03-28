import React, {useEffect} from 'react'
import { ServicesContainer, ServicesWrapper, ServiceTitle, Service, Title, Subtitle, ServiceDescription, Description, ServiceDuration, Duration} from './ServicesElements'
import 'aos/dist/aos.css';
import Aos from 'aos';

const ServicesSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);

      return (

        <ServicesContainer  id='services'>
          <ServiceTitle>Nuestro servicio</ServiceTitle>
          <ServicesWrapper data-aos="fade-in" >
            <Service>
              <Title>Analisis</Title>
              <Subtitle>antes de diseñar</Subtitle>
            </Service>
            <ServiceDescription>
              <Description>- Analisis completo del proyecto </Description>
              <Description>- Entender las necesidades del cliente </Description>
              <Description>- Alinear objetivos y estrategias </Description>
            </ServiceDescription>
            <ServiceDuration>
              <Duration>1 dia</Duration>
            </ServiceDuration>
          </ServicesWrapper>
          <ServicesWrapper data-aos="fade-in" >
            <Service>
              <Title>Diseño</Title>
              <Subtitle>vision del cliente</Subtitle>
            </Service>
            <ServiceDescription>
              <Description>- Diseño del sitio web </Description>
              <Description>- Feedback constante </Description>
              <Description>- </Description>
            </ServiceDescription>
            <ServiceDuration>
              <Duration>10-14 dias</Duration>
            </ServiceDuration>
          </ServicesWrapper>
          <ServicesWrapper data-aos="fade-in" >
            <Service>
              <Title>Implementación</Title>
              <Subtitle>single page website</Subtitle>
            </Service>
            <ServiceDescription>
              <Description>- Desarrollo del sitio </Description>
              <Description>- Estrategias de posisionamiento </Description>
              <Description>- Diseño responsive</Description>
            </ServiceDescription>
            <ServiceDuration>
              <Duration>20-30 dias</Duration>
            </ServiceDuration>
          </ServicesWrapper>
          <ServicesWrapper data-aos="fade-in" >
            <Service>
              <Title>Soporte</Title>
              <Subtitle>cambios y correcciones</Subtitle>
            </Service>
            <ServiceDescription>
              <Description>- Mantenimiento </Description>
              <Description>- Cambios solicitados </Description>
              <Description>- Hosting </Description>
            </ServiceDescription>
            <ServiceDuration>
              <Duration>1 dia</Duration>
            </ServiceDuration>
          </ServicesWrapper>
        </ServicesContainer>
        
      );
}

export default ServicesSection
