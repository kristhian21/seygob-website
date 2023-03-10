import { React, useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [logo, setLogo] = useState("/white-logo.png");
  return (
    <div
      className="flex flex-col sm:flex-row justify-between items-center
     bg-indigo-800 py-6 px-16 text-white"
    >
      <div className="sm:basis-1/3 flex flex-col gap-4 items-center">
        <Image src={`${logo}`} alt="Logo image" width={50} height={50} />
        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0">Contacto</h3>
      </div>
      <ul className="sm:basis-1/3 text-center text-lg font-bold">
        <li>soporte@seygob.com</li>
        <li>3176901710 - 3232053448</li>
        <li>Calle 71c #91-29</li>
      </ul>
      <p className="sm:basis-1/3 mt-6 text-center">
        © 2023 Todos los derechos reservados.
      </p>
    </div>
  );
}
