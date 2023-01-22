import Product from "./Product";
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
    <div className="px-8 mb-10">
      <h2 className="mb-4 text-3xl font-bold">Módulos ERP HASNET</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {modules}
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="w-40 bg-gradient-to-r from-blue-500 to-indigo-700
          hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-800 
          text-white rounded-full py-2 px-4 text-lg font-bold cursor-pointer 
          shadow-xl shadow-slate-00/40"
        >
          Ver más
        </button>
      </div>
    </div>
  );
}
