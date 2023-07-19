import { TarjetaRajo, ListaRajos } from "../index";
import { ImSearch } from "react-icons/im";

function TablaRajos() {
  const myDatos = [
    {
      rajo: "Rajo 1",
      mineral: "Cobre",
      lastre: 1230,
      total_extraccion: 2340,
      remanejo: 2134,
      movimiento_total: 231,
      chancado: 23911,
    },
    {
      rajo: "Rajo 2",
      mineral: "Cobre",
      lastre: 1230,
      total_extraccion: 2340,
      remanejo: 2134,
      movimiento_total: 231,
      chancado: 23911,
    },
    {
      rajo: "Rajo 3",
      mineral: "Cobre",
      lastre: 1230,
      total_extraccion: 2340,
      remanejo: 2134,
      movimiento_total: 231,
      chancado: 23911,
    },
    {
      rajo: "Rajo 4",
      mineral: "Cobre",
      lastre: 1230,
      total_extraccion: 2340,
      remanejo: 2134,
      movimiento_total: 231,
      chancado: 23911,
    },
    {
      rajo: "Rajo 5",
      mineral: "Cobre",
      lastre: 1230,
      total_extraccion: 2340,
      remanejo: 2134,
      movimiento_total: 231,
      chancado: 23911,
    },
  ];

  return (
    <div className="tabla-rajos">
      <TarjetaRajo
        rajo="Rajo"
        mineral="Mineral"
        lastre="Lastre"
        total_extraccion="Total Extraccion"
        remanejo="Remanejo"
        movimiento_total="Movimiento Total"
        chancado="Chancado"
        icon={""}
      />
      <ListaRajos>
        {myDatos.map((element) => (
          <TarjetaRajo
            key={element.rajo}
            rajo={element.rajo}
            mineral={element.mineral}
            lastre={element.lastre}
            total_extraccion={element.total_extraccion}
            remanejo={element.remanejo}
            movimiento_total={element.movimiento_total}
            chancado={element.chancado}
            icon={ImSearch}
          />
        ))}
      </ListaRajos>
    </div>
  );
}
export default TablaRajos;
