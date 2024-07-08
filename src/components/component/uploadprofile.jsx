import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import '../styles/uploadprofile.css';
import ProfileImage from '../images/plus.png'; // 이미지를 임포트합니다.

const InputProfile = ({ imgSrc = ProfileImage, inputId = 'change' }) => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="inputProfile">
      <div className="inputProfile_box">
        <img 
          src={imgSrc} 
          className="get_img" 
          alt="upload_profile" 
          onClick={handleImageClick} 
          style={{ cursor: 'pointer' }}
        />
        <input
          type="file"
          id={inputId}
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
}

// PropTypes를 사용하여 props의 타입을 지정합니다.
InputProfile.propTypes = {
  imgSrc: PropTypes.string,  // 이미지 소스 경로를 문자열로 지정
  inputId: PropTypes.string  // input 요소의 ID를 문자열로 지정
};

export default InputProfile;
