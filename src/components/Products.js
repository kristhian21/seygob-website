import Product from "./Product";
import Link from "next/link";
import modulesData from "../data/mainModules";

export default function Products() {
  const modules = modulesData.map((item) => {
    return (
      <Product key={item.id} name={item.name}>
        {item.info}
      </Product>
    );
  });

  return (
    <div className="p-8">
      <h2 className="mb-8 text-3xl font-bold">Módulos ERP HASNET</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {modules}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          className="w-40 bg-gradient-to-r from-blue-500 to-indigo-700
          hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-800 
          text-white rounded-full py-2 px-4 text-lg font-bold cursor-pointer 
          shadow-lg shadow-slate-500/30 hover:shadow-xl hover:shadow-slate-500/40 text-center"
          href="/soluciones"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
}
