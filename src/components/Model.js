import { React, useState } from "react";
import Image from "next/image";

export default function Model(props) {
  return (
    <div
      className="basis-1/2 flex flex-col justify-start p-8 bg-white rounded-xl
     text-black shadow-md shadow-slate-400/30
     hover:shadow-xl hover:shadow-slate-600/30"
    >
      <h3 className="text-2xl font-bold">{props.name}</h3>
      <hr className="h-1 mt-1 mb-4 bg-gradient-to-r from-blue-500 to-indigo-700 border-0 rounded" />
      <p className="text-lg">{props.children}</p>
      <div className="flex justify-center mt-8">
        <Image src={props.icon} alt="icon" width={100} height={100} />
      </div>
    </div>
  );
}
