import { React, useState } from "react";
import Image from "next/image";

export default function Erp() {
  const [image, setImage] = useState("/erp.jpg");
  return (
    <div className="flex flex-col items-center md:flex-row p-8">
      <div className="md:basis-1/2 md:px-12 flex flex-col justify-center">
        <h3 className="text-2xl md:text-4xl font-bold mb-4">
          Administración de Base de Datos y Hosting Software ERP HASNET
        </h3>
        <p className="text-xl font-medium">
          Debido a la dinámica de crecimiento y proyección de las Entidades se
          hace necesario contar con la infraestructura tecnológica adecuada para
          atender la demanda de información, concurrencia de usuarios,
          interoperabilidad con plataformas externas, escalabilidad de hardware,
          que permitan el buen desarrollo de las actividades de la Entidad en
          las áreas Administrativas, financiera y de Impuestos.
        </p>
      </div>
      <Image
        className="md:basis-1/2 mt-8 md:mt-0 rounded-lg shadow-xl shadow-slate-900/60"
        src={`${image}`}
        alt="Team Image"
        width={300}
        height={300}
      />
    </div>
  );
}

{
  /* <Image
        className="md:basis-1/2 rounded-lg shadow-xl shadow-slate-900/60"
        src={`${image}`}
        alt="Team Image"
        width={400}
        height={400}
      /> */
}
