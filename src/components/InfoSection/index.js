import React, {useEffect} from 'react'
import { InfoContainer, InfoWrapper, InfoCardsWrapper, InfoSubtitle, Button, ContactText, MainWrapper, CarouselContainer, Section, CariuseltextWrapper, CarouselTitle, CarouselSubtitle } from './InfoElements'
import "./infoSection.scss";
import FlipCard from './FlipCard';
import  {Carousel}  from '../Carousel/Carousel';
import {FiMonitor} from 'react-icons/fi';
import {FiAward} from 'react-icons/fi';
import {FiImage} from 'react-icons/fi';
import {FiCloud} from 'react-icons/fi';

const InfoSection = (props) => {
 

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
            </MainWrapper>
        </>
    )
}

export default InfoSection
