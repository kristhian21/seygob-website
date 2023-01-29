import Advantages from "@/components/Advantages";
import BusinessModel from "@/components/BusinessModel";
import Erp from "@/components/Erp";
import Hero from "@/components/Hero";
import Head from "next/head";

export default function Soluciones() {
  return (
    <div>
      <Head>
        <title>Soluciones | SEYGOB</title>
        <meta name="description" content="Soluciones" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Hero
        bg="hero-solutions-background"
        opacity="bg-black/80"
        title="ERP HASNET"
        subtitle="Herramienta para el registro, manejo y control de la información para
        rendición de informes y toma de decisiones de entidades públicas
        colombianas."
      />
      <Erp />
      <BusinessModel />
      <Advantages />
    </div>
  );
}
