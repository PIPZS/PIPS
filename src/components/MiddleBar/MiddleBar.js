import React from 'react'
import {BarContainer, MainWrapper, InfoWrapper, Box, BoxTitle, BoxText, ButtonWrapper, Button} from './MiddleBarElements'

function MiddleBar() {
  return (
    <BarContainer>
        <MainWrapper>
          <InfoWrapper>
              <Box>
                <BoxTitle><p>0.1.</p>Mantenimiento web</BoxTitle>
                <BoxText>Seguimiento de los avances del proyecto. Matenimiento y actualizaciones de sitios web CMS y tradicionales. 
                  Optimización de código y mejoras de funcionalidades.
                </BoxText>
              </Box>
              <Box>
                <BoxTitle><p>0.2.</p>Optimización seo</BoxTitle>
                <BoxText>Ofrecemos usoluciones versátiles con el objetivo de maximizar la visibilidad orgánica de los sitios web en 
                  los buscadores y en las redes sociales. Tags personalizados con estándares de SEO actuales.
                </BoxText>
              </Box>
              <Box>
                <BoxTitle><p>0.3.</p>Registro de dominio</BoxTitle>
                <BoxText>
                  Nos aseguramos de que encuentres el dominio correcto y que tenga un lugar seguro en línea con protección de privacidad 
                  para personas y empresas.
                </BoxText>
              </Box>
              <Box>
                <BoxTitle><p>0.4.</p>Servicios de hosting</BoxTitle>
                <BoxText>
                  Mapeamos todo para que tu presencia online sea efectiva: variedad de planes de Hosting profesionales con emails propios, 
                  soporte formidable y aplicaciones autoinstalables.
                </BoxText>
              </Box>
            </InfoWrapper>
        <ButtonWrapper>
          <Button to='contact' smooth={true} duration={500} spy={true} exact={true} offset={-60}>Discutí tu proyecto</Button>
        </ButtonWrapper>
      </MainWrapper>
    </BarContainer>
  )
}

export default MiddleBar
