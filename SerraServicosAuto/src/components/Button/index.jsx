const Button = ({ children, onClick, className = "" }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button; // Certifique-se de usar export default
