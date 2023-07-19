import {
  ActionButton,
  TablaFases,
  TablaRajos,
  TitleBar,
  UserStatus,
} from "../../components/index";
import "./excell_details.css";

function ExcellDetails() {
  const actionButtonClick = () => {
    window.alert("hoa");
    window.location.reload();
  };

  return (
    //General container
    <div className="elements-container">
      {/* Title container */}
      <div className="header-div">
        <TitleBar myText={"Detalles rajo"} />
        <UserStatus userType={"Admin"} />
      </div>

      {/* Buttons container */}
      <div className="choose-buttons">
        <ActionButton
          buttonText={"Reportes diarios turno A"}
          handleCLick={actionButtonClick}
        />
        <ActionButton
          buttonText={"Reportes diarios turno B"}
          handleCLick={actionButtonClick}
        />
      </div>

      {/* pit table review container */}
      <div className="pits-review">
        <TablaFases />
      </div>

      <ActionButton className="report-button" buttonText={"Imprimir informe"} />
      {/* Bottom buttons container */}
      <div className="bottom-buttons">
        <ActionButton
          buttonText={"Cerrar sesion"}
          handleCLick={actionButtonClick}
        />
      </div>
    </div>
  );
}
export default ExcellDetails;
ñ;
