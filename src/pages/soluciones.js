import BusinessModel from "@/components/BusinessModel";
import Erp from "@/components/Erp";
import Hero from "@/components/Hero";

export default function Soluciones() {
  return (
    <div>
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
    </div>
  );
}
