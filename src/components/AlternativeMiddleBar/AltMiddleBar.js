import React from 'react'
import {BarContainer, TextWrapper, Title, Subtitle, ButtonWrapper, Button} from './AltMiddleBarElements'

function AltMiddleBar() {
  return (
    <BarContainer>
        <TextWrapper first>
            <Title>MISIÓN</Title>
            <Subtitle>Estamos comprometidos a brindarle soluciones de diseño web de primera calidad que los ayudarán a hacer crecer sus marcas y su negocio. 
                Diseñadores y desarrolladores web experimentados.
            </Subtitle>
        </TextWrapper>
        <TextWrapper>
            <Title>VISIÓN</Title>
            <Subtitle>Los consultores web están siempre a su disposición para hacer que las cosas sucedan exactamente como usted quiere, o incluso mejor.
                Reconocidos por nuestros logros sobresalientes.
            </Subtitle>
        </TextWrapper>
        {/* <ButtonWrapper>
            <Button to="contact" smooth={true} duration={500} spy={true} exact={true} offset={-80}>Contactanos!</Button>
        </ButtonWrapper> */}
    </BarContainer>
  )
}

export default AltMiddleBar