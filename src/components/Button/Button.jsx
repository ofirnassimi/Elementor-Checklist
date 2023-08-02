import './Button.css';

function Button({ className, onClick, disabled, label, ...rest }) {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {label}
    </button>
  );
}

export default Button;
