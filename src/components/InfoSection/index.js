import React, {useEffect, useState} from 'react'
import { InfoContainer, InfoWrapper, InfoCardsWrapper, InfoSubtitle, Button, ContactText, MainWrapper, WhatsAppButton, CariuseltextWrapper, CarouselTitle, CarouselSubtitle } from './InfoElements'
import "./infoSection.scss";
import FlipCard from './FlipCard';
import {FiMonitor} from 'react-icons/fi';
import {FiAward} from 'react-icons/fi';
import {FiImage} from 'react-icons/fi';
import {FiCloud} from 'react-icons/fi';
import "./infoCss.css";
import Gallery from '../Gallery/Index';

const InfoSection = (props) => {
  


      const [specialScroll, setSpecialScroll] = useState(false)

      const changeNav = () => {
          if(window.scrollY >= document.documentElement.clientHeight - 800){
              setSpecialScroll(true)
          }else{
              setSpecialScroll(false);
          }
      }

      useEffect(() => {
          window.addEventListener('scroll', changeNav)
      }, [])

      const cards = [
        {
          id: "2",
          variant: "hover",
          front: "Desarrollo web",
          subtitle: "Proyecto 1",
          back: "Nuestra especialidad. Creamos experiencias digitales que desafían el statu quo. Trabajamos estratégicamente para que las marcas y las personas interactúen a través de sitios web disruptivos e innovadores.",
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
                      <InfoSubtitle className='subtitle' lang='en'>
                      <InfoSubtitle bold className='title'>
                                    <br></br>PIPS LAB es una compañía creativa con sede en Buenos Aires que busca ayudar a las marcas y personas a comunicarse a través de sitios web únicos e innovadores.
                      </InfoSubtitle>
                                    Trabajamos para hacer un cambio disruptivo, que defina la industria y que haga latir el corazón. El tipo de trabajo que habla de posibilidad y progreso, 
                                              abriendo oportunidades para generar un impacto positivo para su marca y el mundo que nos rodea.<br></br>
                                    <br></br>No importa cuál sea su desafío, grande o pequeño, existe la posibilidad de hacer cualquier movimiento que desafíe el statu quo.
                      </InfoSubtitle>
                      <ContactText>
                        <Button to="services" smooth={true} duration={500} spy={true} exact={true} offset={-60}>Ver más</Button>
                      </ContactText>
                  </InfoWrapper>
                  <InfoCardsWrapper>
                      {cards.map((card) => (<FlipCard key={card.id} card={card} icon={card.icon} />))}
                  </InfoCardsWrapper>
                </InfoContainer>
                
                <CariuseltextWrapper>
                  <CarouselTitle>
                      DISEÑO DE SITIO WEB PERSONALIZADO
                  </CarouselTitle>
                  <CarouselSubtitle>
                      Ofrecemos servicios de diseño y desarrollo de sitios web personalizados y tenemos experiencia en la producción de sitios web que se encuentran dentro del mejor algoritmo para las mejores clasificaciones de SEO.
                  </CarouselSubtitle>
                </CariuseltextWrapper>
                <Gallery/>
                
                
                
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
                <WhatsAppButton specialScroll={specialScroll}>
                  <a href="https://api.whatsapp.com/send?phone=541154552769&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios." class="float" target="_blank">
                    <i class="fa fa-whatsapp my-float"> </i>
                  </a>
              </WhatsAppButton>
               <section style={{height:'35px', backgroundColor:'#161616'}}></section>
            </MainWrapper>
        </>
    )
}

export default InfoSection



