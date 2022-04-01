import React, {useEffect} from 'react'
import { InfoContainer, InfoTitle, InfoWrapper, InfoCardsWrapper, InfoText, InfoSubtitle, Button, ContactText, MainWrapper, CarouselContainer, Section } from './InfoElements'
import 'aos/dist/aos.css';
import Aos from 'aos';
import "./infoSection.scss";
import FlipCard from './FlipCard';
import  {Carousel}  from '../Carousel/Carousel';
import {BsChevronCompactRight, BsChevronCompactLeft} from "react-icons/bs";

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
          icon: props.theme === 'dark' ? <BsChevronCompactRight/> : <BsChevronCompactRight/>,
        },
        {
          id: "2",
          variant: "hover",
          front: "Contenido Visual",
          subtitle: "Proyecto 1",
          back: "Los contenidos visuales son captados y procesados por el cerebro 60 mil veces más rápido que el texto. Facilitamos la generación de contenido visual de calidad ajustado a los objetivos de los clientes.",
          icon: props.theme === 'dark' ? <BsChevronCompactRight/> : <BsChevronCompactRight/>,
        },
        {
          id: "3",
          variant: "hover",
          front: "Branding",
          subtitle: "Proyecto 1",
          back: "Interpretando las ideas de los clientes, alineamos el discurso de la marca, sus valores y sus atributos con su imagen. Diseñamos marcas sólidas, atractivas e innovadoras con el objetivo de transformar la información en estrategia y la estrategia en acción.",
          icon: props.theme === 'dark' ? <BsChevronCompactRight/> : <BsChevronCompactRight/>,
        },
        {
          id: "4",
          variant: "hover",
          front: "Tiendanube",
          subtitle: "Proyecto 1",
          back: "Redefinimos el mundo del e-commerce. Diseñamos y organizamos todo lo que tu negocio digital necesita para vender a través de Tiendanube, la plataforma de ventas más elegida de Latinoamérica. ",
          icon: props.theme === 'dark' ? <BsChevronCompactRight/> : <BsChevronCompactRight/>,
        },
        
      ];



    return (
        <>
        
          <MainWrapper>
              <InfoContainer id={'about'}>
                  <InfoWrapper>
                      {/* <InfoTitle>ABOUT US</InfoTitle>   */}
                      <InfoSubtitle><br></br>PIPS LAB es una compañía creativa con sede en Buenos Aires que busca ayudar a las marcas y personas a comunicarse a través de sitios web innovadores y únicos.<br></br>
                                    <br></br>Trabajamos para hacer un cambio disruptivo, que defina la industria y que haga latir el corazón. El tipo de trabajo que habla de posibilidad y progreso, 
                                              abriendo oportunidades para generar un impacto positivo para su marca y el mundo que nos rodea.<br></br>
                                    <br></br>No importa cuál sea su desafío, grande o pequeño, existe la posibilidad de hacer cualquier movimiento que desafíe el status quo
                      </InfoSubtitle>
                      <ContactText>
                        <Button to="contact" smooth={true} duration={500} spy={true} exact={true} offset={-60}>Contactanos!</Button>
                      </ContactText>
                  </InfoWrapper>
                  <InfoCardsWrapper>
                      {cards.map((card) => (<FlipCard key={card.id} card={card} icon={card.icon} />))}
                  </InfoCardsWrapper>
                </InfoContainer>
                <Section/>
                <CarouselContainer>
                    <Carousel/>
                </CarouselContainer>
            </MainWrapper>
        </>
    )
}

export default InfoSection
