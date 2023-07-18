import "./user_status.css";
import { FaUserAlt } from "react-icons/fa";
export default function UserStatus({ userType }) {
  return (
    <a className="user-card" href="">
      <FaUserAlt className="icon" />
      {userType}
    </a>
  );
}
