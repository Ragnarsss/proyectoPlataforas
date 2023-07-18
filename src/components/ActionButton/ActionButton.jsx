import "./action_button.css";
export default function ActionButton({ buttonText, handleCLick }) {
  return (
    <button className="action-button" onClick={handleCLick}>
      <p> {buttonText} </p>
    </button>
  );
}
