
import { toast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
}

// Function to simulate sending the contact form data
export const sendContactForm = async (data: ContactFormData): Promise<void> => {
  // This is a mock implementation
  // In a real-world scenario, this would make an API call to your backend
  
  console.log("Contact form data:", data);
  
  // Simulate an API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate successful submission (90% success rate)
      if (Math.random() > 0.1) {
        console.log("Email template that would be sent:");
        console.log(`
To: processimo.ai@gmail.com
From: noreply@processimo.com
Subject: New Contact Form Submission: ${data.subject}

Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}` : ''}
${data.phone ? `Phone: ${data.phone}` : ''}

Message:
${data.message}

This message was sent from the Processimo contact form.
        `);
        
        resolve();
      } else {
        // Simulate error
        reject(new Error("Failed to send contact form"));
      }
    }, 1500);
  });
};
