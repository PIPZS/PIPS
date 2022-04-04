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
    
        

        </MainWrapper>
        
      );
}

export default ServicesSection
