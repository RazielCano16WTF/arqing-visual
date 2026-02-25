import styles from './Contact.module.css';
import ContactForm from './ContactForm';
import { useForm } from '../../../hooks/useForm';

export default function Contact() {
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset
  } = useForm({
    name: '',
    email: '',
    message: ''
  });

  const onSuccess = () => {
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    reset();
  };

  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.sectionTitle}>Contacto</h2>
      <ContactForm
        values={values}
        errors={errors}
        isSubmitting={isSubmitting}
        onChange={handleChange}
        onSubmit={(e) => handleSubmit(e, onSuccess)}
      />
    </section>
  );
}
