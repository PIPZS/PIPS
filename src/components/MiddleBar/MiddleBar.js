import React from 'react'
import {BarContainer, TextWrapper, Title, Subtitle, ButtonWrapper, Button, Wrapper} from './MiddleBarElements'

function MiddleBar() {
  return (
    <BarContainer>
        <TextWrapper>
            <Wrapper><Title>TE AYUDAMOS A CRECER</Title>
            <Subtitle>A partir de las necesidades de la organización, trabajamos con el cliente para diseñar soluciones a medida que harán crecer su negocio.
            </Subtitle></Wrapper>
            <Wrapper>
            <Title>¿POR QUÉ ELEGIRNOS?</Title>
            <Subtitle>Creemos que las primeras impresiones importan y que solo existe una oportunidad. 
                    Por eso, somos especialistas en implementar acciones disruptivas que definen la industria y que hacen latir el corazón.
            </Subtitle>
            </Wrapper>
        </TextWrapper>
        <ButtonWrapper>
            <Button to="contact" smooth={true} duration={500} spy={true} exact={true} offset={-80}>A ver mas!</Button>
        </ButtonWrapper>
    </BarContainer>
  )
}

export default MiddleBar
