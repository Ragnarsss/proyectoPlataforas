import { WiDaySunny } from "react-icons/wi";
import "./value_card.css";

function ValueCard({ caption, ammount }) {
  return (
    <div className="card">
      <div className="caption-icon">
        <WiDaySunny className="caption-icon__icon" />
        <p>{caption}</p>
      </div>
      <p className="value">{ammount}</p>
    </div>
  );
}
export default ValueCard;
