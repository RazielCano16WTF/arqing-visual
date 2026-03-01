# Configurar envío de emails (EmailJS)

Instrucciones para recibir los mensajes del formulario en tu correo usando EmailJS (sin servidor propio).

1) Regístrate en EmailJS
- Ve a https://www.emailjs.com y crea una cuenta.
- En `Email Services` añade o selecciona tu servicio de email (Gmail, Outlook, etc.).

2) Crea una plantilla
- En `Email Templates` crea una plantilla nueva que use variables como `from_name`, `from_email`, `message`.

3) Obtén identificadores
- Copia `Service ID` (ej. `service_xxx`), `Template ID` (ej. `template_xxx`) y tu `Public Key` (user id / public key).

4) Añade variables de entorno en tu proyecto (Vite)
- Crea un archivo `.env.local` en la raíz y añade:

```
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Reinicia el servidor de desarrollo después de cambiar las variables.

5) Estructura de datos
- `src/api/contact.ts` enviará `{ from_name, from_email, message }` como `template_params`.

6) Probar
- Ejecuta:

```bash
npm run dev
```
- Rellena el formulario en la sección `Contacto` y pulsa enviar. Si todo está configurado correctamente, deberías recibir el email en la cuenta asociada al `Service ID`.

Notas y seguridad
- No compartas tus claves públicas/privadas. El `Public Key` usado por EmailJS está pensado para uso cliente, pero sigue las prácticas recomendadas y verifica límites de uso.
- Si prefieres no usar EmailJS, puedo ayudar a crear un pequeño endpoint Node.js con `nodemailer` y protegerlo con una llave en servidor.
