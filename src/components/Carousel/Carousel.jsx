import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material'
import React, { useState } from 'react'
import "./Carousel.scss"

const Carousel = () => {

const [currentSlide, setCurrentSlide] = useState(0);

const prevSlide =()=> {
    setCurrentSlide(currentSlide === 0 ? 1 : (prev) => prev - 1);
};
const nextSlide =()=> {
    setCurrentSlide(currentSlide === 1 ? 0 : (prev) => prev + 1);
};

  return (
    <div className='carousel'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src="/image/Banner.svg" alt="" />
            <img src="/image/Banner2.svg" alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <KeyboardDoubleArrowLeft />
            </div>
            <div className="icon" onClick={nextSlide}>
                <KeyboardDoubleArrowRight />
            </div>
        </div>
    </div>
  )
}

export default Carousel