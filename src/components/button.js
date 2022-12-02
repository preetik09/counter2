import "./button.css";

const Button = ({
  backgroundColor,
  name,
  size = "medium",
  type = null,
  action,
  disabled,
}) => {
  return (
    // <div className="button-container">
    <button
      onClick={action}
      className={`custom-button ${backgroundColor} `}
      disabled={disabled}
      //   color={backgroundColor}
      style={{
        backgroundColor: `${backgroundColor}`,
      }}
    >
      {name}
    </button>
    // </div>
  );
};
export default Button;
