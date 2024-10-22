import React, { useState, useRef } from "react";
import SignUpLink from "../components/component/link";
import styled from 'styled-components';
import CollieLandTitle from '../../src/components/images/collie_land_title.png';  // 이미지 경로에 맞게 수정
import bottomImg from '../../src/components/images/intro/bottom.png';

const LoginPage = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [helperText, setHelperText] = useState({ email: "", password: "" });
  const [rememberId, setRememberId] = useState(false);  
  const [autoLogin, setAutoLogin] = useState(false);    

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
      console.log('아이디 저장:', rememberId);  // 아이디 저장 여부 확인
      console.log('자동 로그인:', autoLogin);    // 자동 로그인 여부 확인
      // 여기에 로그인 로직을 추가할 수 있습니다.
    }
  };

  const validateEmailFormat = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validatePasswordFormat = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    return passwordRegex.test(password);
  };

  const handleInputChange = (type) => {
    const value = type === "email" ? emailRef.current.value : passwordRef.current.value;
    const isValid = type === "email" ? validateEmailFormat(value) : validatePasswordFormat(value);
    const helperMessage = type === "email" ? '*올바른 이메일 주소 형식을 입력해주세요. (예: example@example.com)' : '*비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다.';

    if (value && !isValid) {
      setHelperText(prev => ({ ...prev, [type]: helperMessage }));
    } else {
      setHelperText(prev => ({ ...prev, [type]: '' }));
    }
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
          <SignUpLink
            text="회원가입하러 가기"
            to="/joinmember"
          />
        </ButtonContainer>
      </FormBox>
      <BottomImage src={bottomImg} alt="Bottom Image" />
    </Container>
  );
};

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
  background: ${props => (props.checked ? "black" : "white")}; /* 기본은 흰색, 체크되면 검은색 */
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
