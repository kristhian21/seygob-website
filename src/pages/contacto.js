import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Head from "next/head";

export default function Contacto() {
  return (
    <div>
      <Head>
        <title>Contacto | SEYGOB</title>
        <meta name="description" content="Contacto" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Hero
        bg="hero-contact-background"
        opacity="bg-black/80"
        title="Contacto"
        subtitle="¿En qué podemos ayudarte?"
      />
      <ContactForm />
    </div>
  );
}
