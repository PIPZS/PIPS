import React, {useEffect} from 'react'
import { InfoContainer, InfoTitle, InfoWrapper, InfoCardsWrapper, InfoText, InfoSubtitle, Button, ContactText, InfoImage, ImageWrapper } from './InfoElements'
import 'aos/dist/aos.css';
import Aos from 'aos';
import "./styles.scss";
import FlipCard from './FlipCard';
import Image1 from "../../images/Icon1.png"
import Image2 from "../../images/Icon2.png"
import Image3 from "../../images/Icon3.png"
import Image4 from "../../images/Icon4.png"
import Image5 from "../../images/infosection.png"

const InfoSection = () => {

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
          icon: Image1
        },
        {
          id: "2",
          variant: "hover",
          front: "Contenido Visual",
          subtitle: "Proyecto 1",
          back: "Los contenidos visuales son captados y procesados por el cerebro 60 mil veces más rápido que el texto. Facilitamos la generación de contenido visual de calidad ajustado a los objetivos de los clientes.",
          icon: Image2
        },
        {
          id: "3",
          variant: "hover",
          front: "Tiendanube",
          subtitle: "Proyecto 1",
          back: "Redefinimos el mundo del e-commerce. Diseñamos y organizamos todo lo que tu negocio digital necesita para vender a través de Tiendanube, la plataforma de ventas más elegida de Latinoamérica. ",
          icon: Image3
        },
        {
          id: "4",
          variant: "hover",
          front: "Branding",
          subtitle: "Proyecto 1",
          back: "Interpretando las ideas de los clientes, alineamos el discurso de la marca, sus valores y sus atributos con su imagen. Diseñamos marcas sólidas, atractivas e innovadoras con el objetivo de transformar la información en estrategia y la estrategia en acción.",
          icon: Image4
        },
        
      ];

    return (
        <>
            <InfoContainer id={'about'}>
                 <InfoWrapper>
                    <InfoTitle>ABOUT US</InfoTitle>  
                    <InfoSubtitle><br></br>PIPS LAB is a creative company based in Buenos Aires that seeks to help brands and people communicate through creative and innovative websites. <br></br> <br></br>No matter what your challenge, big or small, there is a chance to make any move that will challenge the status quo.</InfoSubtitle>
                    <ContactText>
                      <InfoText>¿Queres trabajar en un proyecto?</InfoText>
                      <Button to="contact" smooth={true} duration={500} spy={true} exact={true} offset={-60}>Contactanos!</Button>
                    </ContactText>
                 </InfoWrapper>
                 <InfoCardsWrapper>
                    {cards.map((card) => (
                    <FlipCard key={card.id} card={card} icon={card.icon} />
                    ))}
                </InfoCardsWrapper>
                 
            </InfoContainer>   
        </>
    )
}

export default InfoSection
