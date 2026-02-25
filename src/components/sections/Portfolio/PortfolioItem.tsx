import { useState, useEffect, useRef } from 'react';
import type { PortfolioItem } from '../../../types';
import styles from './Portfolio.module.css';

interface PortfolioItemComponentProps {
  item: PortfolioItem;
}

export default function PortfolioItemComponent({ item }: PortfolioItemComponentProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // Delay inicial aleatorio entre 0 y 2000ms para que no empiecen todos juntos
    const initialDelay = Math.random() * 2000;
    
    // Velocidad de rotación aleatoria entre 2500ms y 4000ms
    const rotationSpeed = 2500 + Math.random() * 1500;

    const startRotation = () => {
      intervalRef.current = window.setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % item.images.length
        );
      }, rotationSpeed);
    };

    // Iniciar después del delay inicial
    const timeoutId = setTimeout(() => {
      startRotation();
    }, initialDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [item.images.length]);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
    
    // Reiniciar el intervalo después del clic manual
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    
    const rotationSpeed = 2500 + Math.random() * 1500;
    intervalRef.current = window.setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % item.images.length
      );
    }, rotationSpeed);
  };

  return (
    <div className={styles.portfolioItem}>
      <div className={styles.imageSlider}>
        {item.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${item.title} - ${index + 1}`}
            className={`${styles.portfolioImage} ${
              index === currentImageIndex ? styles.active : ''
            }`}
          />
        ))}
      </div>
      <div className={styles.portfolioOverlay}>
        <h3 className={styles.portfolioTitle}>{item.title}</h3>
        <p className={styles.portfolioCategory}>{item.category}</p>
        <div className={styles.imageDots}>
          {item.images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentImageIndex ? styles.activeDot : ''
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
