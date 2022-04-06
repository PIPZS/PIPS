import React, {useEffect} from 'react'
import { InfoContainer, InfoWrapper, InfoCardsWrapper, InfoSubtitle, Button, ContactText, MainWrapper, CarouselContainer, Section, CariuseltextWrapper, CarouselTitle, CarouselSubtitle, CardsWrapper, Card, CardText, CardsTitle, CardsSubtitle, CardsTextWrapper, CardTitle } from './InfoElements'
import 'aos/dist/aos.css';
import Aos from 'aos';
import "./infoSection.scss";
import FlipCard from './FlipCard';
import  {Carousel}  from '../Carousel/Carousel';
import MiddleBar from '../MiddleBar/MiddleBar';
import {FiMonitor} from 'react-icons/fi';
import {FiCode} from 'react-icons/fi';
import {FiAward} from 'react-icons/fi';
import {FiImage} from 'react-icons/fi';
import {FiUploadCloud} from 'react-icons/fi';
import {FiCloud} from 'react-icons/fi';
import {FiFileText} from 'react-icons/fi';
import AltMiddleBar from '../AlternativeMiddleBar/AltMiddleBar';

const InfoSection = (props) => {

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, []);

      const cards = [
        {
          id: "2",
          variant: "hover",
          front: "Desarrollo web",
          subtitle: "Proyecto 1",
          back: "Nuestra especialidad. Creamos experiencias digitales que desafían el status quo. Trabajamos estratégicamente para que las marcas y las personas interactúen a través de sitios web disruptivos e innovadores.",
          icon: <FiMonitor/>,
        },
        {
          id: "2",
          variant: "hover",
          front: "Contenido Visual",
          subtitle: "Proyecto 1",
          back: "Los contenidos visuales son captados y procesados por el cerebro 60 mil veces más rápido que el texto. Facilitamos la generación de contenido visual de calidad ajustado a los objetivos de los clientes.",
          icon: <FiImage/>,
        },
        {
          id: "3",
          variant: "hover",
          front: "Branding",
          subtitle: "Proyecto 1",
          back: "Interpretando las ideas de los clientes, alineamos el discurso de la marca, sus valores y sus atributos con su imagen. Diseñamos marcas sólidas, atractivas e innovadoras con el objetivo de transformar la información en estrategia y la estrategia en acción.",
          icon: <FiAward/>,
        },
        {
          id: "4",
          variant: "hover",
          front: "Tiendanube",
          subtitle: "Proyecto 1",
          back: "Redefinimos el mundo del e-commerce. Diseñamos y organizamos todo lo que tu negocio digital necesita para vender a través de Tiendanube, la plataforma de ventas más elegida de Latinoamérica. ",
          icon: <FiCloud/>,
        },
        
      ];



    return (
        <>
        
          <MainWrapper id={'about'}>
              <InfoContainer>
                  <InfoWrapper>
                      {/* <InfoTitle>ABOUT US</InfoTitle>   */}
                      <InfoSubtitle className='subtitle'>
                      <InfoSubtitle bold className='title'>
                                    <br></br>PIPS LAB es una compañía creativa con sede en Buenos Aires que busca ayudar a las marcas y personas a comunicarse a través de sitios web innovadores y únicos.
                      </InfoSubtitle>
                                    Trabajamos para hacer un cambio disruptivo, que defina la industria y que haga latir el corazón. El tipo de trabajo que habla de posibilidad y progreso, 
                                              abriendo oportunidades para generar un impacto positivo para su marca y el mundo que nos rodea.<br></br>
                                    <br></br>No importa cuál sea su desafío, grande o pequeño, existe la posibilidad de hacer cualquier movimiento que desafíe el status quo
                      </InfoSubtitle>
                      <ContactText>
                        <Button to="contact" smooth={true} duration={500} spy={true} exact={true} offset={-60}>Ver más</Button>
                      </ContactText>
                  </InfoWrapper>
                  <InfoCardsWrapper>
                      {cards.map((card) => (<FlipCard key={card.id} card={card} icon={card.icon} />))}
                  </InfoCardsWrapper>
                </InfoContainer>
                <Section/>
                <CariuseltextWrapper>
                  <CarouselTitle>
                      DISEÑO DE SITIO WEB PERSONALIZADO
                  </CarouselTitle>
                  <CarouselSubtitle>
                      Ofrecemos servicios de diseño y desarrollo de sitios web personalizados y tenemos experiencia en la produccion de sitios web que se encuentran dentro del mejor algoritmo para las mejores clasificaciones de SEO.
                  </CarouselSubtitle>
                </CariuseltextWrapper>
                <CarouselContainer>
                    <Carousel/>
                </CarouselContainer>
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
                    <Card>
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
                <AltMiddleBar/>
            </MainWrapper>
        </>
    )
}

export default InfoSection
