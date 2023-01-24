import { React, useState } from "react";
import Image from "next/image";

export default function Erp() {
  const [image, setImage] = useState("/team.jpg");
  return (
    <div className="flex flex-col px-8">
      <div>
        <h3 className="text-2xl md:text-4xl font-bold mb-4">
          Administración de Base de Datos y Hosting Software ERP HASNET
        </h3>
        <p className="text-xl">
          Debido a la dinámica de crecimiento y proyección de las Entidades se
          hace necesario contar con la infraestructura tecnológica adecuada para
          atender la demanda de información, concurrencia de usuarios,
          interoperabilidad con plataformas externas, escalabilidad de hardware,
          que permitan el buen desarrollo de las actividades de la Entidad en
          las áreas Administrativas, financiera y de Impuestos.
        </p>
      </div>
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
