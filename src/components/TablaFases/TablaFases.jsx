import { TarjetaFase, ListaFases } from "../index";
import { ImSearch } from "react-icons/im";

function TablaFases() {
  const myDatos = [
    {
      fase: "Fase 1",
      ciclo: "ciclo 1",
      origen: "origen 1",
      destino: "destino 1",
      zona: "Zona 1",
      carguio: "Carguio 1",
      camion: "Camion 1",
      flota: "Flota 1",
      tonelaje: "Tonelaje 1",
      fecha: "Fecha",
      icon: "",
    },
    {
      fase: "Fase 1",
      ciclo: "ciclo 1",
      origen: "origen 1",
      destino: "destino 1",
      zona: "Zona 1",
      carguio: "Carguio 1",
      camion: "Camion 1",
      flota: "Flota 1",
      tonelaje: "Tonelaje 1",
      fecha: "Fecha",
      icon: "",
    },
    {
      fase: "Fase 1",
      ciclo: "ciclo 1",
      origen: "origen 1",
      destino: "destino 1",
      zona: "Zona 1",
      carguio: "Carguio 1",
      camion: "Camion 1",
      flota: "Flota 1",
      tonelaje: "Tonelaje 1",
      fecha: "Fecha",
      icon: "",
    },
    {
      fase: "Fase 1",
      ciclo: "ciclo 1",
      origen: "origen 1",
      destino: "destino 1",
      zona: "Zona 1",
      carguio: "Carguio 1",
      camion: "Camion 1",
      flota: "Flota 1",
      tonelaje: "Tonelaje 1",
      fecha: "Fecha",
      icon: "",
    },
    {
      fase: "Fase 1",
      ciclo: "ciclo 1",
      origen: "origen 1",
      destino: "destino 1",
      zona: "Zona 1",
      carguio: "Carguio 1",
      camion: "Camion 1",
      flota: "Flota 1",
      tonelaje: "Tonelaje 1",
      fecha: "Fecha",
      icon: "",
    },
  ];

  return (
    <div className="tabla-rajos">
      <TarjetaFase
        fase="Fase"
        ciclo="Ciclo"
        origen="Origen"
        destino="Destino"
        zona="Zona"
        carguio="Carguio"
        camion="Camion"
        flota="Flota"
        tonelaje="Tonelaje"
        fecha="Fecha"
        icon=""
      />
      <ListaFases>
        {myDatos.map((element) => (
          <TarjetaFase
            key={element.fase}
            fase={element.fase}
            ciclo={element.ciclo}
            origen={element.origen}
            destino={element.destino}
            zona={element.zona}
            carguio={element.carguio}
            camion={element.camion}
            flota={element.flota}
            tonelaje={element.tonelaje}
          />
        ))}
      </ListaFases>
    </div>
  );
}
export default TablaFases;
