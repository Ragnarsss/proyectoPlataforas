import {
  ActionButton,
  TitleBar,
  UserStatus,
  ValueCard,
} from "../../components/index";
import "./details_view.css";

function DetailsView() {
  const actionButtonClick = () => {
    window.alert("hoa");
    window.location.reload();
  };

  return (
    <div className="elements-container">
      <div className="header-div">
        <TitleBar myText={"Reportes"} />
        <UserStatus userType={"Admin"} />
      </div>
      <div className="choose-buttons">
        <ActionButton
          buttonText={"Reportes diarios turno A"}
          handleCLick={actionButtonClick}
        />
        <ActionButton
          buttonText={"Reportes diarios turno B"}
          handleCLick={actionButtonClick}
        />
        <ActionButton
          buttonText={"Modificar Factor de carga"}
          handleCLick={actionButtonClick}
        />
        <ActionButton
          buttonText={"Solicitudes de acceso"}
          handleCLick={actionButtonClick}
        />
      </div>
      <div className="pits-review"></div>
      <div className="value-cards value-cards-row-1">
        <ValueCard caption={"Valor real del dia"} ammount={500} />
        <ValueCard caption={"Valor semanal ISO"} ammount={500} />
        <ValueCard caption={"Valor semanal movil"} ammount={500} />
      </div>
      <div className="value-cards value-cards-row-2">
        <ValueCard caption={"Valor real mensual"} ammount={500} />
        <ValueCard caption={"Valor real anual"} ammount={500} />
      </div>
      <div className="bottom-buttons">
        <ActionButton
          buttonText={"Cerrar sesion"}
          handleCLick={actionButtonClick}
        />
      </div>
    </div>
  );
}
export default DetailsView;
