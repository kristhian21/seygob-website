import Image from "next/image";
import React, { useState } from "react";

export default function Hero() {
  const [image, setImage] = useState("/hero-image.jpg");

  return (
    <section className="h-screen mb-8 hero-background flex flex-col md:flex-row">
      <div className="basis-1/2 flex flex-col justify-center md:pl-16 p-4">
        <h1 className="text-2xl sm:text-3xl mt-24 lg:text-5xl font-black text-white">
          SOLUCIONES EMPRESARIALES Y DE GOBIERNO SEYGOB SAS
        </h1>
        <p className="font-extrabold mt-4 text-xl sm:text-2xl text-amber-400">
          Trabajamos día a día para entregar a nuestros clientes soluciones
          integrales facilitando sus tareas diarias
        </p>
      </div>
      <div className="basis-1/2 flex justify-center items-center mt-8 p-4 mb-4">
        <Image
          className="rounded-lg shadow-xl shadow-slate-900/60"
          src={`${image}`}
          alt="Hero Image"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
