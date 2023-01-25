export default function Hero(props) {
  return (
    <section
      className={`h-screen bg-cover bg-left-top ${props.bg}
     bg-blend-overlay ${props.opacity} bg-fixed flex flex-col items-center
     justify-center md:flex-row md:justify-start px-8 md:px-16`}
    >
      <div className="flex flex-col md:basis-2/3">
        <h1 className="text-4xl md:text-5xl mt-24 font-black text-white">
          {props.title}
        </h1>
        <p className="font-bold mt-8 text-2xl md:text-3xl text-amber-500">
          {props.subtitle}
        </p>
      </div>
    </section>
  );
}
