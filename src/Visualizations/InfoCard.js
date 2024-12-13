import React, { useState } from 'react';

const InfoCard = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
      <div className="carousel-container">
        <div className="carousel-slide">
          {slides[currentIndex]}
        </div>

        <button className="carousel-button prev" onClick={goToPreviousSlide}>
          &lt;
        </button>
        <button className="carousel-button next" onClick={goToNextSlide}>
          &gt;
        </button>

        <div className="carousel-dots">
          {slides.map((_, index) => (
              <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
              ></span>
          ))}
        </div>
      </div>
  );
};

export default InfoCard;

