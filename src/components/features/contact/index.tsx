import ContactForm from './contact-form';

export default function ContactSection() {
  return (
    <section className="mx-auto flex max-w-[70%] flex-col items-center justify-center py-16 sm:max-w-75 md:max-w-lg">
      <div className="container flex flex-col items-center justify-center">
        <h2 className="font-hero text-accent mb-4 text-3xl tracking-wide">Contact Us</h2>
        <ContactForm />
      </div>
    </section>
  );
}
