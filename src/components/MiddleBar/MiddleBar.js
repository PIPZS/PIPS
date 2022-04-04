import React from 'react'
import {BarContainer, TextWrapper, Title, Subtitle, ButtonWrapper, Button} from './MiddleBarElements'

function MiddleBar() {
  return (
    <BarContainer>
        <TextWrapper>
            <Title>TE AYUDAMOS A CRECER</Title>
            <Subtitle>Trabajaremos con usted para conocer su negocio, sus objetivos y conocer a sus clientes y sus necesidades. Luego, con sus comentarios, 
                diseñaremos y construiremos un sitio web que lo ayudará a hacer crecer su negocio y que a sus clientes les encantará
            </Subtitle>
            <Title>¿POR QUÉ ELEGIRNOS?</Title>
            <Subtitle>Trabajaremos con usted para conocer su negocio, sus objetivos y conocer a sus clientes y sus necesidades. Luego, con sus comentarios, 
                diseñaremos y construiremos un sitio web que lo ayudará a hacer crecer su negocio y que a sus clientes les encantará
            </Subtitle>
        </TextWrapper>
        <ButtonWrapper>
            <Button to="contact" smooth={true} duration={500} spy={true} exact={true} offset={-80}>Comtactanos!</Button>
        </ButtonWrapper>
    </BarContainer>
  )
}

export default MiddleBar