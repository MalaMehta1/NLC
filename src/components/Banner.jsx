import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { homeData } from '../data';

const Banner = () => {
  const { slides, title, subtitle, ctaLabel, ctaPath } = homeData.banner;

  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle slide change
  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide functionality using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); // Move to the next slide
    }, 3500); 

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="banner">
      <div className="carousel">
        <ul className="slides">
          {slides.map((slide, index) => (
            <React.Fragment key={slide.id}>
              <input
                type="radio"
                name="radio-buttons"
                id={slide.id}
                checked={currentSlide === index}
                onChange={() => changeSlide(index)}
              />
              <li className="slide-container">
                <div className="slide-image">
                  <img src={slide.src} alt={`Slide ${index + 1}`} />
                </div>
                <div className="carousel-controls">
                  <label htmlFor={slide.prev} className="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label htmlFor={slide.next} className="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
            </React.Fragment>
          ))}
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <label
                key={`dot-${index}`}
                htmlFor={slides[index].id}
                className={`carousel-dot ${
                  currentSlide === index ? "active" : ""
                }`}
                onClick={() => changeSlide(index)}
              ></label>
            ))}
          </div>
        </ul>
      </div>
      <div className="banner-content container">
        <div className="banner-title">{title}</div>
        <div className="banner-subtitle">{subtitle}</div>
        <div className="banner-contact">
          <NavLink to={ctaPath} className="btn btn-primary">
            {ctaLabel}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
