import Model from "./Model";

export default function BusinessModel() {
  return (
    <div className="p-8">
      <h3 className="text-2xl md:text-4xl font-bold mb-4">
        Modelo de Negocios ERP HASNET
      </h3>
      <div className="flex flex-col md:flex-row gap-5 ">
        <Model name="On Premise" icon="/server-icon.png">
          En cuanto a este primer aspecto, el modelo on premise ahorra costos
          inicialmente, pero requiere de afrontar gastos asociados al IT, a otro
          hardware. Esta opción, además, se convierte en algo arriesgado al
          dificultar el poder saber con certeza cuánta inversión habrá que hacer
          a medida que se compliquen las cosas.
        </Model>
        <Model name="Cloud" icon="/cloud.png">
          Con la versión en nube se pueden hacer previsiones sólidas de los
          costes que habrá a largo plazo. Además, se pueden ahorrar gastos
          debido a que no hay que adquirir ningún tipo de hardware adicional. La
          inversión inicial es reducida.
        </Model>
      </div>
    </div>
  );
}

// const [serverIcon, setServerIcon] = useState("/server-icon.png");
// const [cloudIcon, setCloudIcon] = useState("/cloud.png");
