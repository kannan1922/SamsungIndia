
import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import grasstv from '../Assets/Grasstv.jpg';
import pinktv from '../Assets/pinktv.jpg';
import oven from '../Assets/oven.jpg';
import boygirl from '../Assets/boygirlnight.jpg';
import './Tab.css';

function Tabswitch() {
  const [index, setIndex] = useState(0);
  const [showCaption, setShowCaption] = useState(true);
  const [slideDirection, setSlideDirection] = useState('left');
  const [timeoutId, setTimeoutId] = useState(null);

  const isMobile = useMediaQuery({ maxWidth: 550 });
  const images = isMobile
    ? [

      {
        src: 'https://images.samsung.com/is/image/samsung/assets/in/home/720x108018.jpg?imwidth=360',
        caption1: 'Eco Bubble Washing Machine',
        caption2: 'Start at ₹61000',
      },
        {
          src: 'https://images.samsung.com/is/image/samsung/assets/in/home/new-Main-KV_720x1080-with-H2.jpg?imwidth=360',
          caption1: 'For The Stadium Called India',
          caption2: 'Start at ₹49999',
        },
       
        {
          src: 'https://images.samsung.com/is/image/samsung/assets/in/home/Neo-QLED_720X1080.jpg?imwidth=360',
          caption1: 'Eco Bubble Washing Machine',
          caption2: 'Start at ₹61000',
        },
        {
          src: 'https://images.samsung.com/is/image/samsung/assets/in/home/720x108018.jpg?imwidth=360',
          caption1: 'Eco Bubble Washing Machine',
          caption2: 'Start at ₹61000',
        },
      ]
    : [
        {
          src: grasstv,
          caption1: 'For The Stadium Called India',
          caption2: 'Start at ₹49999',
        },
        {
          src: pinktv,
          caption1: 'For the 4k Experience',
          caption2: 'Start at ₹61000',
        },
        {
          src: oven,
          caption1: '415L BESPOKE Eco Bubble',
          caption2: 'Start at ₹49999',
        },
        {
          src: boygirl,
          caption1: '653L BESPOKE SIDE BY SIDE',
          caption2: 'Start at ₹61000',
        },
      ];

  const handleButtonClick = () => {
    clearTimeout(timeoutId);
    setShowCaption(true);
    const newTimeoutId = setTimeout(() => {
      setShowCaption(false);
    }, 100);
    setTimeoutId(newTimeoutId);
  };

  const handleManualImageChange = (selectedIndex) => {
    clearTimeout(timeoutId);
    setShowCaption(false);
    if (selectedIndex == index){
      setShowCaption(true);
    }
    // Check if the selected index is the same as the current index
    if (selectedIndex !== index) {
      const newTimeoutId = setTimeout(() => {
        setShowCaption(true);
      }, 100);
      setTimeoutId(newTimeoutId);
  
      setIndex(selectedIndex);
      setSlideDirection(selectedIndex > index ? 'right' : 'left');
    }
  };
  

  return (
    <div className='wrapp'>
    <div className={`custom-carousel-container1 ${isMobile ? 'mobile-styles' : ''}`}>
       <div className="custom-indicators1">
        {images.map((_, i) => (
          <span key={i} onClick={() => handleManualImageChange(i)} className={i === index ? 'active' : ''}>
            {i === 0 && 'The Frame'}
            {i === 1 && 'Neo TV'}
            {i === 2 && 'Oven'}
            {i === 3 && 'QLED'}
          </span>
        ))}
      </div>
      <Carousel
        activeIndex={index}
        onSelect={(selectedIndex) => handleManualImageChange(selectedIndex)}
        className='fade1'
      >
        {images.map((image, i) => (
          <Carousel.Item key={i}>
            <img
              src={image.src}
              alt={`Slide ${i + 1}`}
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            />
            <Carousel.Caption className={`custom-carousel-captionz1 ${showCaption ? 'show' : ''} ${slideDirection}`}>
              <h3 className='carouselcaptionz1'>{image.caption1}</h3>
              <p className='carouselcaptionz2'>{image.caption2}</p>
              <p style={{ textDecoration: 'underline' }} className='carouselcaptionz3'>
                <button className='cc1' onClick={handleButtonClick}>
                  Buy now
                </button>{' '}
                {/* Learn More */}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
     
      </div>
    </div>
  );
}
export default Tabswitch