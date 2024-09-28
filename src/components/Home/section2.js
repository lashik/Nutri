import { useState, useEffect } from 'react';
import section2Styles from './section2.module.scss';
import image1 from "../../assets/carousel1.jpg"
import image2 from "../../assets/carousel2.jpeg"
const Carousel = () => {
  const images = [
   image1,
   image2
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className={section2Styles.carousel}>
      <div className={section2Styles.carouselItem}>
        <img src={images[currentIndex]} alt={`Carousel Item ${currentIndex + 1}`} />
      </div>

      <button className={section2Styles.carouselPrev} onClick={goToPrevious}>
        
      </button>
      <button className={section2Styles.carouselNext} onClick={goToNext}>
        
      </button>
    </div>
  );
};

export default Carousel;
