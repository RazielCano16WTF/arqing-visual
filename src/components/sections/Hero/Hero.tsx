import styles from './Hero.module.css';
import { useScrollToSection } from '../../../hooks/useScrollToSection';

export default function Hero() {
  const scrollToSection = useScrollToSection();

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection('#contact');
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Transforma tus ideas en arte visual</h1>
        <p className={styles.subtitle}>Renderizado arquitectónico y dibujo técnico de la más alta calidad</p>
        <a href="#contact" className={styles.ctaButton} onClick={handleCTAClick}>
          Solicita una Cotización
        </a>
      </div>
    </section>
  );
}
