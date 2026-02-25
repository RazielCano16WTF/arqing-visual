export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string | undefined;
  name?: string;
  email?: string;
  message?: string;
}
