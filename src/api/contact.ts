import type { ContactFormData } from '../types';

export const submitContactForm = async (data: ContactFormData): Promise<boolean> => {
  // Aquí implementarías la lógica para enviar el formulario
  // Por ejemplo, usando fetch, axios, o EmailJS
  
  console.log('Enviando formulario:', data);
  
  // Simular delay de red
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simular respuesta exitosa
  return true;
};
