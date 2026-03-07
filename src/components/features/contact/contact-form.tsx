'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema } from '@/schemas/contact';
import type { ContactFormData } from '@/schemas/contact';
import { StyledButton } from '@/components/ui/buttons';

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      subject: '',
      name: '',
      email: '',
      message: '',
    },
    delayError: 2000,
    mode: 'onChange',
  });

  const onSubmit = (data: ContactFormData) => {
    alert(`Hey, ${data.name}! Thank you for your message.`);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-primary-brown flex w-full flex-col gap-4 px-4 py-6 md:px-8 md:py-10"
    >
      <div className="">
        <label htmlFor="subject" className="sr-only">
          Subject
        </label>
        <div className="font-label relative flex">
          <input
            id="subject"
            type="text"
            placeholder="Subject"
            {...register('subject', { required: 'Subject is required' })}
            aria-invalid={errors.subject ? 'true' : 'false'}
            className="text-primary-brown w-full rounded-xs border bg-white px-1 py-1 text-sm placeholder-current md:text-base"
          />
        </div>
        {errors.subject && (
          <p role="alert" className="text-accent font-body mt-1 text-sm md:text-base">
            {errors.subject.message}
          </p>
        )}
      </div>
      <div className="">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <div className="font-label relative flex">
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Name"
            {...register('name', { required: 'Name is required' })}
            aria-invalid={errors.name ? 'true' : 'false'}
            className="text-primary-brown w-full rounded-xs border bg-white px-1 py-1 text-sm placeholder-current md:text-base"
          />
        </div>
        {errors.name && (
          <p role="alert" className="text-accent font-body mt-1 text-sm md:text-base">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <div className="font-label relative flex">
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="Email"
            {...register('email', { required: 'Email is required' })}
            aria-invalid={errors.email ? 'true' : 'false'}
            className="text-primary-brown w-full rounded-xs border bg-white px-1 py-1 text-sm placeholder-current md:text-base"
          />
        </div>
        {errors.email && (
          <p role="alert" className="text-accent font-body mt-1 text-sm md:text-base">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <div className="font-label relative flex h-40">
          <textarea
            id="message"
            placeholder="Message"
            {...register('message', { required: 'Message is required' })}
            aria-invalid={errors.message ? 'true' : 'false'}
            className="text-primary-brown w-full rounded-xs border bg-white px-1 py-1 text-sm placeholder-current md:text-base"
          />
        </div>
        {errors.message && (
          <p role="alert" className="text-accent font-body mt-1 text-sm md:text-base">
            {errors.message.message}
          </p>
        )}
      </div>
      <StyledButton disabled={!isValid || isSubmitting} variant={'primary'}>
        Send
      </StyledButton>
    </form>
  );
}

export default ContactForm;
