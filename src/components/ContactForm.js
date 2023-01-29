import { React, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactForm() {
  const [image, setImage] = useState("/contact.png");
  return (
    <div className="flex flex-col p-8 md:flex-row md:justify-center items-center gap-5">
      <div
        className="flex flex-col items-center p-8 bg-white rounded-xl
     text-black shadow-md shadow-slate-400/30
     hover:shadow-xl hover:shadow-slate-600/30"
      >
        <h1 className="text-3xl font-bold">
          ¡También puedes encontrarnos en Linkedin!
        </h1>
        <Image src={`${image}`} alt="LinkedIn Image" width={350} height={300} />
        <Link
          className="w-40 bg-gradient-to-r from-blue-500 to-indigo-700
          hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-800 
          text-white rounded-full py-2 px-4 text-lg font-bold cursor-pointer 
          shadow-lg shadow-slate-500/30 hover:shadow-xl hover:shadow-slate-500/40 text-center"
          href="https://www.linkedin.com/company/seygob-sas/"
        >
          Visitar perfil
        </Link>
      </div>
      <div
        className="flex flex-col justify-start p-8 bg-white rounded-xl
     text-black shadow-md shadow-slate-400/30
     hover:shadow-xl hover:shadow-slate-600/30"
      >
        <h1 className="text-3xl font-bold">¿En qué podemos ayudarte?</h1>
      </div>
    </div>
  );
}
