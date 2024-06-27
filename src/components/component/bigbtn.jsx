import React from 'react';
import '../styles/bigbtn.css';
import PropTypes from 'prop-types';

// 함수 매개변수에서 기본값을 직접 설정
const BigButton = ({ 
    text, 
    onClick = () => {}, // onClick의 기본값을 여기서 지정
    className = '', // className의 기본값을 여기서 지정
    type = 'submit' // type의 기본값을 여기서 지정
  }) => {
    return (
      <button 
      type={type} 
      className={`Bigbutton ${className}`} // Updated class name
      onClick={onClick}>
      {text}
    </button>
    );
  };
  
  // PropTypes 설정은 그대로 유지
  BigButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.string
  };
  
  export default BigButton;