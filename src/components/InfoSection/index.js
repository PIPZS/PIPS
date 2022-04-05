import React, {useEffect} from 'react'
import { InfoContainer, InfoTitle, InfoWrapper, InfoCardsWrapper, InfoText, InfoSubtitle, Button, ContactText, MainWrapper, CarouselContainer, Section, CariuseltextWrapper, CarouselTitle, CarouselSubtitle, CardsWrapper, Card, CardText, CardsTitle, CardsSubtitle, CardsTextWrapper, CardTitle } from './InfoElements'
import 'aos/dist/aos.css';
import Aos from 'aos';
import "./infoSection.scss";
import FlipCard from './FlipCard';
import  {Carousel}  from '../Carousel/Carousel';
import MiddleBar from '../MiddleBar/MiddleBar';
import {GoLightBulb} from 'react-icons/go'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {IoImageOutline} from 'react-icons/io5'
import {AiOutlineCloud} from 'react-icons/ai'
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
          icon: <HiOutlineDesktopComputer/>,
        },
        {
          id: "2",
          variant: "hover",
          front: "Contenido Visual",
          subtitle: "Proyecto 1",
          back: "Los contenidos visuales son captados y procesados por el cerebro 60 mil veces más rápido que el texto. Facilitamos la generación de contenido visual de calidad ajustado a los objetivos de los clientes.",
          icon: <IoImageOutline/>,
        },
        {
          id: "3",
          variant: "hover",
          front: "Branding",
          subtitle: "Proyecto 1",
          back: "Interpretando las ideas de los clientes, alineamos el discurso de la marca, sus valores y sus atributos con su imagen. Diseñamos marcas sólidas, atractivas e innovadoras con el objetivo de transformar la información en estrategia y la estrategia en acción.",
          icon: <GoLightBulb/>,
        },
        {
          id: "4",
          variant: "hover",
          front: "Tiendanube",
          subtitle: "Proyecto 1",
          back: "Redefinimos el mundo del e-commerce. Diseñamos y organizamos todo lo que tu negocio digital necesita para vender a través de Tiendanube, la plataforma de ventas más elegida de Latinoamérica. ",
          icon: <AiOutlineCloud/>,
        },
        
      ];



    return (
        <>
        
          <MainWrapper>
              <InfoContainer id={'about'}>
                  <InfoWrapper>
                      {/* <InfoTitle>ABOUT US</InfoTitle>   */}
                      <InfoSubtitle>
                      <InfoSubtitle bold>
                                    <br></br>PIPS LAB ES UNA COMPAÑÍA CREATIVA CON SEDE EN BUENOS AIRES QUE BUSCA AYUDAR A LAS MARCAS Y PERSONAS A COMUNICARSE A TRAVÉS DE SITIOS WEB INNOVADORES Y ÚNICOS.
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
                        <GoLightBulb/>
                        <CardTitle>Planear</CardTitle>
                        <CardText>En esta fase se define el publico objetivo del cliente, sus debilidades y la razon por la que los usuarios deberian preocuparse
                          por el producto/servicio que ofrece el sitio web.
                        </CardText>
                    </Card>
                    <Card>
                        <GoLightBulb/>
                        <CardTitle>Desarrollar</CardTitle>
                        <CardText>En esta fase se define el publico objetivo del cliente, sus debilidades y la razon por la que los usuarios deberian preocuparse
                          por el producto/servicio que ofrece el sitio web.
                        </CardText>
                    </Card>
                    <Card>
                        <GoLightBulb/>
                        <CardTitle>Lanzar</CardTitle>
                        <CardText>En esta fase se define el publico objetivo del cliente, sus debilidades y la razon por la que los usuarios deberian preocuparse
                          por el producto/servicio que ofrece el sitio web.
                        </CardText>
                    </Card>
                </CardsWrapper>
            </MainWrapper>
        </>
    )
}

export default InfoSection
