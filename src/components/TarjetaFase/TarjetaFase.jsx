import React from "react";
import "./tarjeta_fase.css";

function TarjetaFase({
  fase,
  ciclo,
  origen,
  destino,
  zona,
  carguio,
  camion,
  flota,
  tonelaje,
  fecha,
  icon = "",
}) {
  let dinamicIcon = "";
  if (icon !== "") {
    dinamicIcon = React.createElement(icon);
  }

  return (
    <div className="tarjeta-fase">
      <p>{fase}</p>
      <p>{ciclo}</p>
      <p>{origen}</p>
      <p>{destino}</p>
      <p>{zona}</p>
      <p>{carguio}</p>
      <p>{camion}</p>
      <p>{flota}</p>
      <p>{tonelaje}</p>
      <p>{fecha}</p>
      <a href="*">{dinamicIcon}</a>
    </div>
  );
}
export default TarjetaFase;
