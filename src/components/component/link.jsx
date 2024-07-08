import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/link.css';

const SignUpLink = ({ text, to, className = '' }) => {
  return (
    <Link to={to} className={`signup-link ${className}`}>
      {text}
    </Link>
  );
};

SignUpLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default SignUpLink;
