import Product from "./Product";

export default function Products() {
  return (
    <div className="px-4 mb-12">
      <h2 className="mb-4 text-3xl font-bold">Módulos ERP HASNET</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <Product>Gestión de Planeacion</Product>
        <Product>Gestión de Presupuesto</Product>
        <Product>Gestión de Contabilidad</Product>
        <Product>Gestión de Tesoreria</Product>
        <Product>Gestión de Talento Humano</Product>
        <Product>Gestión de Recursos Fisicos</Product>
      </div>
      <div className="flex justify-center mt-12">
        <button
          className="w-44 bg-violet-500 hover:bg-violet-600 active:bg-violet-700
          focus:outline-none focus:ring focus:ring-violet-300 text-white 
          rounded-full py-3 px-4 text-lg font-bold cursor-pointer"
        >
          Ver más
        </button>
      </div>
    </div>
  );
}
