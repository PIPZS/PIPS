import React, {useState} from 'react'
import ContactSection from '../components/Contact';
import Footer from '../components/Footer';
import HomeSection from '../components/HomeSection';
import InfoSection from '../components/InfoSection/index';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import FloatingWhatsApp from 'react-floating-whatsapp'
import  {Carousel}  from '../components/Carousel/Carousel';
import  Themes  from "../components/Theme/Themes.js";
import { ThemeProvider } from 'styled-components';
import Switch from '../components/Switch/switch';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    const[theme, setTheme] = useState('light')

    return (
        <ThemeProvider theme={Themes[theme]}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <Switch theme={theme} setTheme={setTheme}/>
            <HomeSection/>
            <InfoSection theme={theme} />
            <ContactSection/>
            <Footer/>
            <FloatingWhatsApp
                phoneNumber="123456789"
                accountName="Bot"
                allowClickAway
                notification
                notificationDelay={60000} // 1 minute
            />
        </ThemeProvider>
    )
}

export default Home
