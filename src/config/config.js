const config = {
  emailjsServiceKey: String(import.meta.env.VITE_EMAILJS_SERVICE_KEY),
  emailjsTemplateId: String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
  emailjsPublicKey: String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
};

export default config;
