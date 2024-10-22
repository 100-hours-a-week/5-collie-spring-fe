import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import centerImg from '../../src/components/images/intro/center.png';
import upImg from '../../src/components/images/intro/up.png';
import bottomImg from '../../src/components/images/intro/bottom.png';

const IntroPage = () => {
  const navigate = useNavigate(); 

  return (
    <IntroContainer>
      <UpImage src={upImg} alt="Up Image" />
      <CenterImage src={centerImg} alt="Center Image" />
      <ButtonContainer>
        <BlackButton onClick={() => navigate('/')}>로그인</BlackButton>
        <BlackButton onClick={() => navigate('/post')}>둘러보기</BlackButton>
      </ButtonContainer>
      <BottomImage src={bottomImg} alt="Bottom Image" />
    </IntroContainer>
  );
};

export default IntroPage;

const IntroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f6d46b;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CenterImage = styled.img`
  position: absolute;
  width: 600px;
  height: auto;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const UpImage = styled.img`
  position: absolute;
  width: 200px;
  height: auto;
  bottom: 70%;
  left: 65%;
  transform: translateX(-50%);
  

  animation: shake 3s ease-in-out infinite;

  @keyframes shake {
    0% {
      transform: translateX(-50%) rotate(0deg);
    }
    25% {
      transform: translateX(-50%) rotate(-5deg);
    }
    50% {
      transform: translateX(-50%) rotate(0deg);
    }
    75% {
      transform: translateX(-50%) rotate(5deg);
    }
    100% {
      transform: translateX(-50%) rotate(0deg);
    }
  }
`;

const BottomImage = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const ButtonContainer = styled.div`
  position: absolute;
  width: 100vw;
  top: 65%;
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

const BlackButton = styled.button`
  background-color: black;
  color: white;
  width: 150px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: black; 
  }


  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: -1;
    transition: top 0.5s ease-in-out;
  }

  &:hover::before {
    top: 0; 
  }
`;

