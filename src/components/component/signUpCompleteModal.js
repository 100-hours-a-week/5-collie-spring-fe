import React from 'react';
import styled, { keyframes } from 'styled-components';

const SignUpCompleteModal = ({ profileImage, nickname, onClose, onGoToLogin }) => {
  return (
    <Overlay>
      <ModalWrapper>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ProfileImage src={profileImage} alt={`${nickname}'s profile`} />
        <Message>{nickname}님 회원가입이 완료되었습니다!🐶</Message>
        <LoginButton onClick={onGoToLogin}>로그인하러 가기</LoginButton>
      </ModalWrapper>
    </Overlay>
  );
};

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);  // 검은색 투명도
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  position: relative;
  animation: ${slideUp} 0.4s ease-out;
  z-index: 1001;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const LoginButton = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #555;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export default SignUpCompleteModal;
