import React, {useState} from 'react';
import styled from "styled-components";
import {CarouselData} from './CarouselData'
import Slider from "react-slick";
import "./Carousel.css"

const Cards = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    position: relative;
    height:21.875rem;
    width:100%;
`;


const Card = styled.div`
    /* width: 20rem ;
    margin: 0 auto; */
    border: 1px solid white;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35) ;
    height: 20rem;
    width: 10rem ;


    @media screen and (max-width: 700px){
        width: 220px;
        height: 220px;
        margin: auto;
    } 
    @media screen and (max-width: 500px){
        width: 40vw;
        height: 40vw;
        margin: auto;
    } 
`;


export const Image = styled.img`
    width: 100%;
    height: 100%;
`

export const Carousel = () => {
    const NextArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <button>NEXT</button>
            </div>
        )
    }
    const PrevArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <button>prev</button>
            </div>
        )
    }

    const [selectedIndex, setSelectedIndex] = useState(0);
    const settings = {
        infinite: true,
        lazyLoad: true, 
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setSelectedIndex(next) 
}

  return (
      <div>
        <Slider {...settings}>
                    {CarouselData.map((data, index) => {
                        return (
                            <Card className={index === selectedIndex ? "Slide ActiveSlide" : "Slide"}>
                                <Image src={data.image}></Image>
                            </Card>
                        )

                    })}
        </Slider>

    </div>
  )
}
