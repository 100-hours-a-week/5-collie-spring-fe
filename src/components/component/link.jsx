import React from 'react';
import PropTypes from 'prop-types';
import '../styles/link.css';

const SignUpLink = ({ text , onClick, className = '' }) => {
  return (
    <span className={`signup-link ${className}`} onClick={onClick}>
      {text}
    </span>
  );
};

SignUpLink.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default SignUpLink;
