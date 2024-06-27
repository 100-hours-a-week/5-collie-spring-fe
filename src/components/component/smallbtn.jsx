import React from 'react';
import '../styles/smallbtn.css';

const SmallButton = ({ text }) => {
  return (
    <button type="submit" className="SmallButton">
      {text}
    </button>
  );
};

export default SmallButton;
