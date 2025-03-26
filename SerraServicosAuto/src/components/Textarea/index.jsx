const Textarea = ({ placeholder, value, onChange, className = "" }) => {
  return (
    <textarea
      className={`custom-textarea ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea; // Certifique-se de usar export default
