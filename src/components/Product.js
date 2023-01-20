export default function Product(props) {
  return (
    <div className="flex flex-col justify-center  py-8 px-4 bg-indigo-700 hover:bg-indigo-600 basis-1/3 rounded-md text-white shadow-md shadow-slate-900/60">
      <h3 className="text-xl font-bold mb-2">{props.children}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, impedit.
      </p>
    </div>
  );
}
