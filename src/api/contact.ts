import type { ContactFormData } from '../types';

export const submitContactForm = async (data: ContactFormData): Promise<boolean> => {
  // EmailJS client-side integration using Vite env vars.
  // Set the following in your .env (see EMAIL_SETUP.md):
  // VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // If env vars are not set, fall back to the stub (useful for local dev).
  if (!serviceId || !templateId || !publicKey) {
    console.warn('EmailJS env vars not configured — using local stub.');
    console.log('Enviando formulario (stub):', data);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return true;
  }

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      from_name: data.name,
      from_email: data.email,
      message: data.message
    }
  };

  try {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      console.error('EmailJS error:', await res.text());
      return false;
    }

    return true;
  } catch (err) {
    console.error('Network error sending email:', err);
    return false;
  }
};
