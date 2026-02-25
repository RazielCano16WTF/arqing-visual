import styles from './Services.module.css';
import ServiceCard from './ServiceCard';
import { services } from '../../../data/services';

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <h2 className={styles.sectionTitle}>Nuestros Servicios</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}
