import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import music from '../Assets/boygirl.jpg'
import wasm from  '../Assets/image.jpg'
import cricket from '../Assets/Carouselcricket.jpg'
import '../Carousel/slider.css' 
import { useState,useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';


function Slider() {
  const [index, setIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 600 });

  const images = isMobile
    ? [
        {
          src: 'https://images.samsung.com/is/image/samsung/assets/in/home/Neo-QLED_720X1080.jpg?imwidth=360',
          caption1: 'For The Stadium Called India',
          caption2: 'Avail Upto ₹2000 on Instant Discount',
        },
        {
          src: 'https://images.samsung.com/is/image/samsung/assets/in/home/720x108018.jpg?$LazyLoad_Home_JPG$',
          caption1: 'Eco Bubble Washing Machine',
          caption2: 'Start at 61000',
        },
      ]
    : [
        { src: cricket, caption1: 'For The Stadium Called India', caption2: 'Start at 49999' },
        { src: wasm, caption1: 'Eco Bubble Washing Machine', caption2: 'Start at 61000' },
      ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % images.length;
      setIndex(nextIndex);
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [index, images.length]);

  useEffect(() => {
    const initialIndex = 1; 
    setIndex(initialIndex);
  }, []);

  return (
    <>
    {/* <h1>\</h1> */}
    <div className='wrp'>
      <div className={`custom-carousel-container ${isMobile ? 'mobile-styles' : ''}`}>
        <Carousel activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)} className='fade1'>
          {images.map((image, i) => (
            <Carousel.Item key={i}>
              <img
                src={image.src}
                alt={`Slide ${i + 1}`}
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
              <Carousel.Caption className="custom-carousel-caption1">
                <h3 className='carouselcaption1'>{image.caption1}</h3>
                <p className='carouselcaption2'>{image.caption2}</p>
                <p className='carouselcaption3'>
                  <button className='cc'>Buy now</button> 
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
    </>
  );
}

export default Slider;