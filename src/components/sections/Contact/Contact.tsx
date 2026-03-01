import { useState } from 'react';
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

  const [success, setSuccess] = useState(false);

  const onSuccess = () => {
    setSuccess(true);
    reset();
    // Clear success after 5 seconds
    setTimeout(() => setSuccess(false), 5000);
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
        success={success}
      />
    </section>
  );
}
