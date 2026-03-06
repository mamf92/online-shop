import { z } from 'zod';

export const ContactFormSchema = z.object({
  subject: z
    .string()
    .min(2, { message: 'Subject needs to be at least 2 characters long.' })
    .max(100, { message: 'Subject cannot be longer than 100 characters.' }),
  name: z
    .string()
    .min(2, { message: 'Name needs to be at least 2 characters long.' })
    .max(100, { message: 'Name cannot be longer than 100 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z
    .string()
    .min(10, { message: 'Message needs to be at least 10 characters long.' })
    .max(500, { message: 'Message cannot be longer than 500 characters.' }),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
