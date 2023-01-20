import Product from "./Product";

export default function Products() {
  return (
    <div className="px-4 mb-12">
      <h2 className="mb-4 text-3xl font-bold">Modulos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <Product>Gestión de contabilidad</Product>
        <Product>Gestión presupuestal</Product>
        <Product>Gestión de recursos humanos</Product>
        <Product>Gestión de recursos físicos</Product>
        <Product>Gestión de impuestos municipales</Product>
        <Product>Gestión de tesoreria</Product>
      </div>
    </div>
  );
}
