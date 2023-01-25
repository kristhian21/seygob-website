import { React, useState } from "react";
import Image from "next/image";

export default function Advantages() {
  const [image, setImage] = useState("/advantages.jpg");
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center p-8 ">
      <div className="order-2 md:order-1  md:basis-1/2 flex justify-center">
        <Image
          className="rounded-lg shadow-xl shadow-slate-900/60"
          src={`${image}`}
          alt="Team Image"
          width={625}
          height={400}
        />
      </div>
      <div className="order-1 md:order-2 md:basis-1/2 md:px-12 mb-4 flex flex-col">
        <h3 className="text-2xl md:text-4xl font-bold mb-6">Ventajas</h3>
        <ul className="text-xl font-bold list-disc px-12 pb-4">
          <li>Personalizable</li>
          <li>Seguro</li>
          <li>Escalable</li>
          <li>IP Única</li>
          <li>Alojamiento de Bases de Datos</li>
          <li>Archivos disponibles en la nube</li>
          <li>Administración de la Bases de datos</li>
          <li>Copias de seguridad programadas en la nube de Microsoft Azure</li>
        </ul>
      </div>
    </div>
  );
}
