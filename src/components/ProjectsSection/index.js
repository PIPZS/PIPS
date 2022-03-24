import React, {useEffect} from 'react'
import { ProjectsContainer, ProjectsWrapper, ProjectsTitle} from './ProjectsElements'
import Aos from 'aos';
import Image1 from '../../images/PIPS.jpg'
import Image2 from '../../images/PIPS.jpg'
import Image3 from '../../images/PIPS.jpg'
import Image4 from '../../images/PIPS.jpg'
import Image5 from '../../images/PIPS.jpg'
import Image6 from '../../images/PIPS.jpg'
import "./styles.scss";
import FlipCard from './FlipCard';

const cards = [
    {
      id: "2",
      variant: "hover",
      front: "Proyecto 1",
      subtitle: "Proyecto 1",
      back: "Descripcion",
      image: Image1,
    },
    {
      id: "2",
      variant: "hover",
      front: "Proyecto 1",
      subtitle: "Proyecto 1",
      back: "Descripcion",
      image: Image2
    },
    {
      id: "3",
      variant: "hover",
      front: "Proyecto 1",
      subtitle: "Proyecto 1",
      back: "Descripcion",
      image: Image3
    },
    {
      id: "4",
      variant: "hover",
      front: "Proyecto 1",
      subtitle: "Proyecto 1",
      back: "Descripcion",
      image: Image4
    },
    {
      id: "5",
      variant: "hover",
      front: "Proyecto 1",
      subtitle: "Proyecto 1",
      back: "Descripcion",
      image: Image5
    },
    {
      id: "6",
      variant: "hover",
      front: "Proyecto 1",
      subtitle: "Proyecto 1",
      back: "Descripcion",
      image: Image6
    },
    
  ];


const ProjectsSection = () => {
      return (

        <ProjectsContainer id='projects'>
        <ProjectsTitle>ULTIMOS TRABAJOS</ProjectsTitle>
        <ProjectsWrapper>
            {cards.map((card) => (
                <FlipCard key={card.id} card={card} imageSource={card.image}/>
            ))}
        </ProjectsWrapper>
        </ProjectsContainer>
        
      );
}

export default ProjectsSection
