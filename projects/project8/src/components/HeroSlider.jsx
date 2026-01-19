import React, { useState, useEffect } from "react";
import "../index.css";

const slides = [
  { id: 1, text: "Скидка 50% на всё!" },
  { id: 2, text: "Новинки сезона!" },
  { id: 3, text: "Товары недели!" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Автоперелистывание
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <div className="hero-slider-container">
      <button className="slider-btn left" onClick={prevSlide}>&lt;</button>
      <div className="hero-slider-grid">
        {slides.map((slide, index) => {
          let position = index - current;
          if (position < -1) position += slides.length;
          if (position > slides.length - 1) position -= slides.length;

          return (
            <div
              key={slide.id}
              className={`slide ${position === 0 ? "active" : position === -1 || position === 1 ? "side" : "hidden"}`}
            >
              {slide.text}
            </div>
          );
        })}
      </div>
      <button className="slider-btn right" onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default HeroSlider;