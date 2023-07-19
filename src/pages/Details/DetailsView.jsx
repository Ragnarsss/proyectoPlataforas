import {
  ActionButton,
  TablaRajos,
  TitleBar,
  UserStatus,
  ValueCard,
} from "../../components/index";
import "./details_view.css";
import { WiDaySunny } from "react-icons/wi";
import { BiCalendarWeek } from "react-icons/bi";
import { BsCalendarWeek } from "react-icons/bs";
import { GiCalendarHalfYear } from "react-icons/gi";
import { MdCalendarMonth } from "react-icons/md";

function DetailsView() {
  const actionButtonClick = () => {
    window.alert("hoa");
    window.location.reload();
  };

  return (
    //General container
    <div className="elements-container">
      {/* Title container */}
      <div className="header-div">
        <TitleBar myText={"Detalles"} />
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
        <TablaRajos />
      </div>

      {/* Cards container
          upper row */}
      <div className="value-cards value-cards-row-1">
        <ValueCard
          icon={WiDaySunny}
          caption={"Valor real del dia"}
          ammount={500}
        />
        <ValueCard
          icon={BiCalendarWeek}
          caption={"Valor semanal ISO"}
          ammount={500}
        />
        <ValueCard
          icon={BsCalendarWeek}
          caption={"Valor semanal movil"}
          ammount={500}
        />
      </div>

      {/* Lower row */}
      <div className="value-cards value-cards-row-2">
        <ValueCard
          icon={MdCalendarMonth}
          caption={"Valor real mensual"}
          ammount={500}
        />
        <ValueCard
          icon={GiCalendarHalfYear}
          caption={"Valor real anual"}
          ammount={500}
        />
      </div>

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
export default DetailsView;
