import type { ContactFormData } from '../../../types';
import styles from './Contact.module.css';

interface ContactFormProps {
  values: ContactFormData;
  errors: { [key: string]: string | undefined };
  isSubmitting: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function ContactForm({
  values,
  errors,
  isSubmitting,
  onChange,
  onSubmit
}: ContactFormProps) {
  return (
    <form className={styles.contactForm} onSubmit={onSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={onChange}
          className={errors.name ? styles.inputError : styles.input}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={onChange}
          className={errors.email ? styles.inputError : styles.input}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>Mensaje</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={onChange}
          className={errors.message ? styles.textareaError : styles.textarea}
        />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </div>

      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
    </form>
  );
}
