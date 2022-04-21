import React from 'react'
import {BarContainer, TextWrapper, Title, Subtitle, ButtonWrapper, Button, Wrapper, MainTitle} from './MiddleBarElements'

function MiddleBar() {
  return (
    <BarContainer>
        <TextWrapper>
            <Wrapper>
              <Title>MANTENIMIENTO WEB</Title>
              <Subtitle>Seguimiento de los avances del proyecto. Mantenimiento y actualizaciones de sitios web CMS y tradicionales. 
                        Optimización de código y mejoras de funcionalidades.
              </Subtitle>
            </Wrapper>
            <Wrapper>
            <Title>OPTIMIZACIÓN SEO</Title>
            <Subtitle>Ofrecemos soluciones versátiles con el objetivo de maximizar la visibilidad orgánica de los sitios web en los buscadores y en las redes sociales. 
                      Tags personalizados con estándares de SEO actuales.
            </Subtitle>
            </Wrapper>
            <Wrapper>
            <Title>REGISTRO DE DOMINIO</Title>
            <Subtitle>Nos aseguramos de que encuentres el dominio correcto y que tenga un lugar seguro en línea con protección de privacidad para personas y empresas.
            </Subtitle>
            </Wrapper>
            <Wrapper>
            <Title>SERVICIO DE HOSTING</Title>
            <Subtitle>Mapeamos todo para que tu presencia online sea efectiva: variedad de planes de Hosting profesionales con emails propios, soporte formidable y aplicaciones autoinstalables.
            </Subtitle>
            </Wrapper>
        </TextWrapper>
        <ButtonWrapper>
            <Button to="contact" smooth={true} duration={500} spy={true} exact={true} offset={-80}>Ver más</Button>
        </ButtonWrapper>
    </BarContainer>
  )
}

export default MiddleBar
