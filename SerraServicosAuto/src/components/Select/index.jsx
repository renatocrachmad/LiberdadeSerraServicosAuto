const Select = ({ options = [], value, onChange, className = "" }) => {
  return (
    <select
      className={`custom-select ${className}`}
      value={value}
      onChange={onChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select; // Certifique-se de usar export default
