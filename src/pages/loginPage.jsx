import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import CollieLandTitle from '../../src/components/images/collie_land_title.png';  // 이미지 경로에 맞게 수정
import bottomImg from '../../src/components/images/intro/bottom.png';

const LoginPage = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [helperText, setHelperText] = useState({ email: "", password: "" });
  const [rememberId, setRememberId] = useState(false);  
  const [autoLogin, setAutoLogin] = useState(false);    
  const navigate = useNavigate();

  // 컴포넌트가 로드될 때 localStorage에서 이메일과 자동 로그인 상태를 확인
  useEffect(() => {
    const savedEmail = localStorage.getItem('savedEmail');
    const autoLoginEnabled = localStorage.getItem('autoLoginEnabled');

    if (savedEmail) {
      emailRef.current.value = savedEmail; // 저장된 이메일을 입력 필드에 설정
      setRememberId(true);
    }

    if (autoLoginEnabled === 'true') {
      setAutoLogin(true);
      // 자동 로그인이 체크되어 있다면 저장된 정보를 이용해 로그인 시도
      const token = localStorage.getItem('token');
      if (token) {
        console.log('자동 로그인 중...');
        navigate('/dashboard'); // 로그인 후 이동할 페이지
      }
    }
  }, [navigate]);

  const handleLogin = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    let valid = true;

    if (!validateEmailFormat(email)) {
      setHelperText(prev => ({ ...prev, email: '*올바른 이메일 주소 형식을 입력해주세요. (예: example@example.com)' }));
      valid = false;
    } else {
      setHelperText(prev => ({ ...prev, email: '' }));
    }

    if (!validatePasswordFormat(password)) {
      setHelperText(prev => ({ ...prev, password: '*비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다.' }));
      valid = false;
    } else {
      setHelperText(prev => ({ ...prev, password: '' }));
    }

    if (valid) {
      console.log('로그인 시도');
      console.log('아이디 저장:', rememberId);  
      console.log('자동 로그인:', autoLogin);  

      if (rememberId) {
        localStorage.setItem('savedEmail', email); // 이메일 저장
      } else {
        localStorage.removeItem('savedEmail'); // 저장된 이메일 삭제
      }

      if (autoLogin) {
        localStorage.setItem('autoLoginEnabled', 'true'); // 자동 로그인 상태 저장
        localStorage.setItem('token', 'someAuthToken'); // 실제로는 서버에서 발급받은 토큰을 저장해야 함
      } else {
        localStorage.removeItem('autoLoginEnabled');
        localStorage.removeItem('token'); // 자동 로그인이 해제되면 토큰 삭제
      }

      navigate('/dashboard'); // 로그인 후 이동할 페이지
    }
  };

  const validateEmailFormat = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validatePasswordFormat = (password) => {
    const passwordRegex = /^.{8,}$/; 
    return passwordRegex.test(password);
  };

  const handleInputChange = (type) => {
    const value = type === "email" ? emailRef.current.value : passwordRef.current.value;
    const isValid = type === "email" ? validateEmailFormat(value) : validatePasswordFormat(value);
    const helperMessage = type === "email" ? '*올바른 이메일 주소 형식을 입력해주세요. (예: example@example.com)' : '*비밀번호는 8자 이상입니다.';

    if (value && !isValid) {
      setHelperText(prev => ({ ...prev, [type]: helperMessage }));
    } else {
      setHelperText(prev => ({ ...prev, [type]: '' }));
    }
  };

  const handleSignUpClick = () => {
    navigate('/joinmember');
  };

  return (
    <Container>
      <HeaderImage src={CollieLandTitle} alt="Collie Land Title" />
      <FormBox>
        <Title>로그인</Title>
        <InputBox>
          <InputContainer>
            <Input
              type="email"
              placeholder="이메일을 입력하세요"
              ref={emailRef}
              onChange={() => handleInputChange("email")}
            />
            {helperText.email && <HelperText>{helperText.email}</HelperText>}
          </InputContainer>
          <InputContainer>
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요"
              ref={passwordRef}
              onChange={() => handleInputChange("password")}
            />
            {helperText.password && <HelperText>{helperText.password}</HelperText>}
          </InputContainer>
        </InputBox>

        <CheckboxContainer>
          <Label>
            <HiddenCheckbox 
              type="checkbox" 
              checked={rememberId} 
              onChange={() => setRememberId(!rememberId)} 
            />
            <StyledCheckbox checked={rememberId} />
            아이디 저장
          </Label>
          <Label>
            <HiddenCheckbox 
              type="checkbox" 
              checked={autoLogin} 
              onChange={() => setAutoLogin(!autoLogin)} 
            />
            <StyledCheckbox checked={autoLogin} />
            자동 로그인
          </Label>
        </CheckboxContainer>

        <ButtonContainer>
          <BlackButton onClick={handleLogin}>로그인</BlackButton>
        </ButtonContainer>
        <ButtonContainer>
          <CustomLink onClick={handleSignUpClick}>회원가입하러 가기</CustomLink> 
        </ButtonContainer>
      </FormBox>
      <BottomImage src={bottomImg} alt="Bottom Image" />
    </Container>
  );
};


const CustomLink = styled.button`
  background: none;
  border: none;
  color: black;
  text-decoration: underline;
  cursor: pointer;
  font-size: 16px;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f6d46b;
`;

const HeaderImage = styled.img`
  width: 300px;
  height: auto;
  margin-top: 20px;
`;

const FormBox = styled.div`
  display: flex;
  width: 500px;
  height: 550px;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.7);
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;

const InputBox = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const InputContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 400px;
  padding: 12px 16px;
  border: none; 
  border-bottom: 2px solid #ccc; 
  font-size: 16px;
  transition: border-color 0.3s ease;
  outline: none;
  box-shadow: none; 
  appearance: none; 

  &:focus {
    border-bottom-color: black; 
    box-shadow: none;  
  }

  &:hover {
    border-bottom-color: #888; 
  }
`;

const HelperText = styled.p`
  position: absolute;
  top: 100%;
  left: 0;
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const CheckboxContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 30px;
  justify-content: center;
  width: 100%;
  padding: 0 40px;
`;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? "black" : "white")}; 
  border-radius: 3px;
  transition: all 150ms;
  border: 2px solid black; 
  position: relative; 

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }

  ${props =>
    props.checked &&
    `
    &::after {
      content: '\\2713'; 
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); 
      font-size: 18px;
      color: white; 
      font-weight: bold;
    }
  `}
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 10px;
`;

const ButtonContainer = styled.section`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const BlackButton = styled.button`
  margin-top: 20px;
  background-color: black;
  color: white;
  width: 383px;
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
    background-color: #f6d46b;
    z-index: -1;
    transition: top 0.5s ease-in-out;
  }

  &:hover::before {
    top: 0; 
  }
`;

const BottomImage = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export default LoginPage;
