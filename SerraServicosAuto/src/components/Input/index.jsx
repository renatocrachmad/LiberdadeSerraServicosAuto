const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
}) => {
  return (
    <input
      type={type}
      className={`custom-input ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input; // Certifique-se de usar export default
