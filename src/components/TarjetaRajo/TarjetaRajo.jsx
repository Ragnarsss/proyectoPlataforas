import React from "react";
import "./tarjeta_rajo.css";

function TarjetaRajo({
  rajo,
  mineral,
  lastre,
  total_extraccion,
  remanejo,
  movimiento_total,
  chancado,
  icon = "",
}) {
  let dinamicIcon = "";
  if (icon !== "") {
    dinamicIcon = React.createElement(icon);
  }

  return (
    <div className="tarjeta-rajo">
      <p>{rajo}</p>
      <p>{mineral}</p>
      <p>{lastre}</p>
      <p>{total_extraccion}</p>
      <p>{remanejo}</p>
      <p>{movimiento_total}</p>
      <p>{chancado}</p>
      <a href="*">{dinamicIcon}</a>
    </div>
  );
}
export default TarjetaRajo;
