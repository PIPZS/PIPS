import React, {useState} from 'react'
import ContactSection from '../components/Contact';
import Footer from '../components/Footer';
import HomeSection from '../components/HomeSection';
import InfoSection from '../components/InfoSection/index';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import  Themes  from "../components/Theme/Themes.js";
import { ThemeProvider } from 'styled-components';
import Switch from '../components/Switch/switch';
import WhatsappButton from '../components/WhatsappButton/WhatsappButton';
import MiddleBar from '../components/MiddleBar/MiddleBar';
import ServicesSection from '../components/Services';



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
            <ServicesSection/>
            <ContactSection/>
            <Footer/>
            <WhatsappButton/>
        </ThemeProvider>
    )
}

export default Home
