import styles from './Portfolio.module.css';
import PortfolioItemComponent from './PortfolioItem';
import { portfolioItems } from '../../../data/portfolio';

export default function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <h2 className={styles.sectionTitle}>Portafolio</h2>
      <div className={styles.portfolioGrid}>
        {portfolioItems.map((item, index) => (
          <PortfolioItemComponent key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
