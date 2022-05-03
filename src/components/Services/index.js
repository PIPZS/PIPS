import React, {useEffect} from 'react'
import { MainWrapper,  CardsWrapper, Card, CardText, CardsTitle, CardsSubtitle, CardsTextWrapper, CardTitle } from './ServicesElements'
import MiddleBar from '../MiddleBar/MiddleBar';
import {FiUploadCloud} from 'react-icons/fi';
import {FiFileText} from 'react-icons/fi';
import {FiCode} from 'react-icons/fi';
import { MainTitle } from '../MiddleBar/MiddleBarElements';

const ServicesSection = () => {


      return (

        <MainWrapper id="services">
            <MainTitle>TAMBIÉN OFRECEMOS</MainTitle>
            <MiddleBar/>
            <CardsTextWrapper>
                <CardsTitle>COMO TRABAJAMOS</CardsTitle>
                <CardsSubtitle>NUESTRO PROCESO</CardsSubtitle>
            </CardsTextWrapper>
            <CardsWrapper>
                <Card>
                    <FiFileText/>
                    <CardTitle>Planear</CardTitle>
                    <CardText>En esta fase se define el publico objetivo del cliente, sus debilidades y la razon por la que los usuarios deberian preocuparse
                      por el producto/servicio que ofrece el sitio web.
                    </CardText>
                </Card>
                <Card alt>
                    <FiCode/>
                    <CardTitle>Desarrollar</CardTitle>
                    <CardText>La etapa de desarrollo implica mover la información recolectada en la etapa de planificación hacia la realidad. 
                              Se entrega una estructura de sitio documentada y una representación visual.
                    </CardText>
                </Card>
                <Card>
                    <FiUploadCloud/>
                    <CardTitle>Lanzar</CardTitle>
                    <CardText>En la fase de lanzamiento se prepara el sitio web para ser visto por el público. 
                      Esto requiere el pulido final de los elementos de diseño, pruebas profundas de interactividad, funciones y una evaluación de la experiencia de usuario.
                    </CardText>
                </Card>
            </CardsWrapper>
        </MainWrapper>
        
      );
}

export default ServicesSection
