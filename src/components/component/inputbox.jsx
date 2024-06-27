import React from 'react';
import '../styles/inputbox.css';
import PropTypes from 'prop-types';

const InputBox = ({
  label,
  type = 'text',
  name,
  placeholder,
  required = false,
  helperText,
  className
}) => {
  return (
    <div className={`form-group ${className}`}>
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className="form-control"
      />
      {helperText && <h3 className="helper-text">{helperText}</h3>}
    </div>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  className: PropTypes.string
};

export default InputBox;
