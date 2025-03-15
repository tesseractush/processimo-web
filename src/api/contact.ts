
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  company?: string;
  phone?: string;
  subject?: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  // Simulate API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate successful submission
      console.log('Contact form submitted:', data);
      resolve({
        success: true,
        message: 'Thank you for your message. We will get back to you shortly.'
      });
    }, 1500);
  });
};
