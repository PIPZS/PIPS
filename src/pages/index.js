import React, {useState} from 'react'
import ContactSection from '../components/Contact';
import Footer from '../components/Footer';
import HomeSection from '../components/HomeSection';
import InfoSection from '../components/InfoSection/index';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import  Themes  from "../components/Theme/Themes.js";
import { ThemeProvider } from 'styled-components';
import WhatsappButton from '../components/WhatsappButton/WhatsappButton';
import ServicesSection from '../components/Services';
import Gallery from '../components/Gallery/Index';



const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    const[theme, setTheme] = useState('dark')

    return (
        <ThemeProvider theme={Themes[theme]}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            {/* <Switch theme={theme} setTheme={setTheme}/> */}
            <HomeSection/>
            <InfoSection theme={theme}/>
            <Gallery/>
            <ServicesSection/>
            
            <ContactSection/>
            <Footer/>
            <WhatsappButton/>
        </ThemeProvider>
    )
}

export default Home
