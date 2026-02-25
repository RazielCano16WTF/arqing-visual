import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { ContactFormData, FormErrors } from '../types';
import { validateEmail, validateRequired, validateMinLength } from '../utils/validators';

export const useForm = (initialValues: ContactFormData) => {
  const [values, setValues] = useState<ContactFormData>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!validateRequired(values.name)) {
      newErrors.name = 'El nombre es requerido';
    } else if (!validateMinLength(values.name, 2)) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    if (!validateRequired(values.email)) {
      newErrors.email = 'El email es requerido';
    } else if (!validateEmail(values.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!validateRequired(values.message)) {
      newErrors.message = 'El mensaje es requerido';
    } else if (!validateMinLength(values.message, 10)) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent, onSuccess?: () => void) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', values);
    setIsSubmitting(false);
    
    if (onSuccess) onSuccess();
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset
  };
};
