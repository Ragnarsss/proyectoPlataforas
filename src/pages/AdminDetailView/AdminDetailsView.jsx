import {
  ActionButton,
  TablaRajos,
  TitleBar,
  UserStatus,
} from "../../components/index";
import "./admin_details_view.css";

function AdminDetailsView() {
  const actionButtonClick = () => {
    window.alert("hoa");
    window.location.reload();
  };

  return (
    //General container
    <div className="elements-container">
      {/* Title container */}
      <div className="header-div">
        <TitleBar myText={"Reportes y administracion"} />
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
        <ActionButton
          buttonText={"Modificar Factor de carga"}
          handleCLick={actionButtonClick}
        />
        <ActionButton
          buttonText={"Solicitudes de acceso"}
          handleCLick={actionButtonClick}
        />
      </div>

      {/* pit table review container */}
      <div className="pits-review">
        <TablaRajos />
      </div>

      <ActionButton className="report-button" buttonText={"REPORTE GENERAL"} />
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
export default AdminDetailsView;
