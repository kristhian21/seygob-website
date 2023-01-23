import Image from "next/image";
import React, { useState } from "react";

export default function HeroSolutions() {
  const [image, setImage] = useState("/hero-image.jpg");
  return (
    <section
      className="h-screen bg-cover bg-center hero-solutions-background
     bg-blend-overlay bg-black/80 bg-fixed mb-14 flex flex-col items-center
     justify-center md:flex-row md:justify-start px-8 md:px-16"
    >
      <div className="flex flex-col md:basis-1/2">
        <h1
          className="text-4xl md:text-5xl mt-24 font-black text-white underline decoration-yellow-600
        decoration-24 underline-offset-8"
        >
          ERP HASNET
        </h1>
        <p className="font-extrabold mt-8 text-2xl md:text-3xl text-amber-600">
          Herramienta para el registro, manejo y control de la información para
          rendición de informes y toma de decisiones de entidades públicas
          colombianas.
        </p>
      </div>
    </section>
  );
}

//<hr className="h-1 w-2/3 sm:w-1/2 mt-3 mb-2 bg-gradient-to-r from-yellow-400 to-amber-800 border-0 rounded" />
