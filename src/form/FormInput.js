import React from "react";
import "./FormInput.css";

const FormInput = ({
  type,
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  isFocused,
  style,
  icon,
}) => {
  return (
    <label className="form-input-label">
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        className={isFocused ? "form-input input-focus" : "form-input"}
        style={style}
      />
      {icon && <span className="input-icon">{icon}</span>}
    </label>
  );
};

export default FormInput;
