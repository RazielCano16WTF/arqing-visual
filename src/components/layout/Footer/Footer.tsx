import styles from './Footer.module.css';
import { SITE_NAME } from '../../../utils/constants';
import logo from '../../../assets/logo.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.footerLeft}>
          <div className={styles.logoContainer}>
            <img src={logo} alt={SITE_NAME} className={styles.logoImage} />
            <span className={styles.logoText}>{SITE_NAME}</span>
          </div>
          <p className={styles.copyright}>
            © {currentYear} {SITE_NAME}. Todos los derechos reservados.
          </p>
        </div>
        <div className={styles.social}>
          <a href="#" className={styles.socialLink} aria-label="Facebook">
            📘
          </a>
          <a href="#" className={styles.socialLink} aria-label="Instagram">
            📷
          </a>
          <a href="#" className={styles.socialLink} aria-label="LinkedIn">
            💼
          </a>
        </div>
      </div>
    </footer>
  );
}
