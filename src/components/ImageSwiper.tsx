import React, { useState, useEffect } from 'react';
import '../assets/styles/ImageSwiper.scss';
import Gallery from './Gallery/Gallery';

interface ImageData {
  imageUrl: string;
  link: string;
}

interface ImageSwiperProps {
  images: ImageData[];
  autoPlayInterval?: number;
}

const ImageSwiper: React.FC<ImageSwiperProps> = ({ 
  images, 
  autoPlayInterval = 3000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="image-swiper">
      <div className="slider-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(${100 * (index - currentIndex)}%)`,
            }}
          >
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.imageUrl} alt={`Slide ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>

      <button className="nav-button prev" onClick={goToPrev}>
        &#10094;
      </button>
      <button className="nav-button next" onClick={goToNext}>
        &#10095;
      </button>

      <div className="dots-container">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSwiper;