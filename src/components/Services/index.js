import React, {useEffect} from 'react'
import { MainWrapper, Section } from './ServicesElements'
import 'aos/dist/aos.css';
import Aos from 'aos';

const ServicesSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);

      return (

        <MainWrapper>
          <Section>
            <h1>ddsdsd</h1>
          </Section>

        </MainWrapper>
        
      );
}

export default ServicesSection
