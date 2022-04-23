import React, {useState} from 'react';
import styled from "styled-components";
import {CarouselData} from './CarouselData'
import Slider from "react-slick";
import "./Carousel.css"
import {BsChevronCompactRight, BsChevronCompactLeft} from "react-icons/bs";




const Card = styled.div`
    /* width: 20rem ;
    margin: 0 auto; */
    border: 1px solid red;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35) ;
    height: 30rem;



    @media screen and (max-width: 700px){
        height:30rem;
        margin: auto;
    } 
    @media screen and (max-width: 500px){
        height: 15rem;
        margin: auto;
    } 
`;


export const Image = styled.img`
    width: 100%;
    height: 100%;
`

export const Carousel = () => {

    React.useEffect(() => {
        const handleResize = () => {
            const condition = window.innerWidth < 900 ? 1 : 3 
            setNumberOfSlides(condition);
        }
        
        window.addEventListener('resize', handleResize)

    })


    const NextArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <BsChevronCompactRight/>
            </div>
        )
    }
    const PrevArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <BsChevronCompactLeft/>
            </div>
        )
    }

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [numberOfSlides, setNumberOfSlides] = useState(3);
    const settings = {
        infinite: true,
        lazyLoad: true, 
        speed: 500,
        slidesToShow: numberOfSlides,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setSelectedIndex(next) 
}




  return (
      <div className='wrapper'>
        <Slider className='slider' {...settings}>
                    {CarouselData.map((data, index) => {

                        return (
                            <Card className={index === selectedIndex ? 'Slide ActiveSlide' : 'Slide'}>
                                { <img src={data.image}></img> }
                            </Card>
                        )

                    })}
        </Slider>

    </div>
  )
}
