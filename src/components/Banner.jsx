import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { homeData } from '../data';

const Banner = () => {
  const {
    slides,
    title,
    subtitle,
    tagline,
    ctaLabel,
    ctaPath,
    secondaryCtaLabel,
    secondaryCtaPath,
  } = homeData.banner;

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="banner" aria-label="Hero banner">
      <div className="banner-media" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`banner-slide ${currentSlide === index ? 'is-active' : ''}`}
          >
            <img src={slide.src} alt="" />
          </div>
        ))}
      </div>

      <div className="banner-overlay" aria-hidden="true" />

      <div className="banner-content container">
        <p className="banner-title">{title}</p>
        <h1 className="banner-subtitle">{subtitle}</h1>
        <div className="banner-accent" aria-hidden="true" />
        {tagline ? <p className="banner-tagline">{tagline}</p> : null}
        <div className="banner-actions">
          <NavLink to={ctaPath} className="btn btn-primary banner-btn">
            {ctaLabel}
          </NavLink>
          {secondaryCtaLabel ? (
            <NavLink to={secondaryCtaPath} className="btn banner-btn-secondary">
              {secondaryCtaLabel}
            </NavLink>
          ) : null}
        </div>
      </div>

      <button
        type="button"
        className="banner-nav banner-nav--prev"
        onClick={goPrev}
        aria-label="Previous slide"
      >
        <IoChevronBack />
      </button>
      <button
        type="button"
        className="banner-nav banner-nav--next"
        onClick={goNext}
        aria-label="Next slide"
      >
        <IoChevronForward />
      </button>

      <div className="banner-dots" role="tablist" aria-label="Banner slides">
        {slides.map((slide, index) => (
          <button
            key={`dot-${slide.id}`}
            type="button"
            role="tab"
            aria-selected={currentSlide === index}
            aria-label={`Go to slide ${index + 1}`}
            className={`banner-dot ${currentSlide === index ? 'is-active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <div className="banner-scroll" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
};

export default Banner;
