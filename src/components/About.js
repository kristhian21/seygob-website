import { React, useState } from "react";
import Image from "next/image";

export default function About() {
  const [image, setImage] = useState("/team.jpg");
  return (
    <div
      className="flex flex-col md:flex-row md:justify-between items-center 
      bg-gradient-to-l from-cyan-500 to-indigo-900 py-12 px-8 text-white"
    >
      <Image
        className="order-2 md:order-1 md:basis-1/2 rounded-lg shadow-xl shadow-slate-900/60"
        src={`${image}`}
        alt="Team Image"
        width={400}
        height={400}
      />
      <div className="order-1 md:order-2 md:basis-1/2 md:px-12 mb-4">
        <h3 className="text-4xl md:text-5xl font-bold mb-4">¿Quiénes somos?</h3>
        <p className="mb-4 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          incidunt quo voluptates blanditiis assumenda culpa laboriosam vitae!
          Repudiandae inventore hic totam neque? Dolores laudantium commodi
          autem a ipsa nulla unde voluptate assumenda, ullam, accusantium id
          est, deserunt officia corporis. Vel explicabo rerum sit odit?
          Excepturi ipsa vitae eum error nesciunt?
        </p>
      </div>
    </div>
  );
}
