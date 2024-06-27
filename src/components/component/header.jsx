import React, { useState } from 'react';
import '../styles/header.css';
import ProfileImage from '../images/image1.png';
const Header = ({ showBeforeButton = false, showProfileImage = false }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="header">
        {/* Before Button 또는 Placeholder */}
        {showBeforeButton ? (
          <button className="beforebutton">&lt;</button>
        ) : (
          <div className="beforebutton-placeholder"></div>
        )}

        {/* 헤더 텍스트: "아무 말 대잔치" */}
        <h1 className="header-title">아무 말 대잔치</h1>

        {/* Profile Image와 Dropdown 또는 Placeholder */}
        {showProfileImage ? (
          <div className="dropdown-form">
            <img className="image" src={ProfileImage} alt="Profile" onClick={toggleDropdown} />
            {isDropdownOpen && (
              <div className="dropdown-content">
                <button onClick={() => console.log('회원정보 수정')}>회원정보 수정</button>
                <button onClick={() => console.log('비밀번호 수정')}>비밀번호 수정</button>
                <button onClick={() => console.log('로그아웃')}>로그아웃</button>
              </div>
            )}
          </div>
        ) : (
          <div className="dropdown-placeholder"></div>
        )}
      </div>
      <div className="horizontal-line"></div>
    </>
  );
};

export default Header;