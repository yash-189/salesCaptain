import React, { useState, useEffect } from 'react';
import image1 from '../assets/leads.webp';
import image2 from '../assets/pay.webp';
import image3 from '../assets/rev.webp';

const SlidableComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const slides = [
    {
      image: image1,
      heading: 'Track everything that matters',
    },
    {
      image: image2,
      heading: 'Accept payments without delay, Grow faster.',
    },
    {
      image: image3,
      heading: 'Powerful integrations with major platforms',
    },
  ];

  

  useEffect(() => {
    let interval;

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoplay, slides.length]);

  return (
    <div className="relative">
      <div className="slideshow overflow-hidden">
        {slides.map((slide, index) => (
          <div
            className={`slide  absolute top-1/2 -left-1/2 transform translate-x-1/2 mt-40  w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0'
            }`}
            key={index}
          >
            <div className="floating-image">
              <img src={slide.image} alt={slide.heading} className="object-contain rounded-lg w-full h-80" />
            </div>
            <h3 className=" text-white text-center w-1/2 mt-8 mx-auto text-2xl font-bold">
              {slide.heading}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidableComponent;
