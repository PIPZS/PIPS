import React, {useEffect} from 'react'
import { InfoContainer, InfoSubtitle, InfoPeople, InfoTitle, InfoWrapper, InfoPeopleTitle, People, ImageWrapper, Image } from './InfoElements'
import Image1 from '../../images/infosection.png'
import 'aos/dist/aos.css';
import Aos from 'aos';

const InfoSection = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, []);

    return (
        <>
            <InfoContainer id={'about'}>
                <ImageWrapper>
                    <Image data-aos='fade-right' src={Image1} alt={'img'}></Image>
                </ImageWrapper>
                 <InfoWrapper>
                    <InfoTitle>SOBRE NOSOTROS</InfoTitle>
                    <InfoSubtitle>----------------------------------------------------------------</InfoSubtitle>
                    <InfoPeople>
                        <InfoPeopleTitle>
                            <People>PIPS es un estudio creativo con sede en Buenos Aires que busca ayudar a las marcas y personas a comunicarse con sus audiencias, a través de webs creativas e innovadoras. </People>
                            <People>El tipo de trabajo que habla de la posibilidad y el progreso, que abre oportunidades para generar impacto positivo tanto para su marca como para el mundo que nos rodea.</People>
                            <People>No importa cuál sea su desafío, grande o pequeño, existe la posibilidad de realizar cualquier movimiento que haga desafiar el status quo.</People>
                        </InfoPeopleTitle>
                    </InfoPeople>
                 </InfoWrapper>
                 
            </InfoContainer>   
        </>
    )
}

export default InfoSection
