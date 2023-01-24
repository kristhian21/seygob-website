import About from "@/components/About";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SEYGOB</title>
        <meta name="description" content="Seygob SAS landing page" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Hero
        bg="hero-main-background"
        opacity="bg-black/70"
        title="SOLUCIONES EMPRESARIALES Y DE GOBIERNO SEYGOB SAS"
        subtitle="Trabajamos día a día para entregar a nuestros clientes soluciones
        integrales facilitando sus tareas diarias."
      />
      <Products />
      <About />
    </div>
  );
}
