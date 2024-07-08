import React, { useState, useRef } from "react";
import Header from "../components/component/header";
import BigButton from "../components/component/bigbtn";
import SignUpLink from "../components/component/link";
import styled from 'styled-components';

const LoginPage = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [emailHelperText, setEmailHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [emailHelperVisible, setEmailHelperVisible] = useState(false);
  const [passwordHelperVisible, setPasswordHelperVisible] = useState(false);

  const handleLogin = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    let valid = true;

    if (!validateEmailFormat(email)) {
      setEmailHelperText('*올바른 이메일 주소 형식을 입력해주세요. (예: example@example.com)');
      setEmailHelperVisible(true);
      valid = false;
    } else {
      setEmailHelperText('');
      setEmailHelperVisible(false);
    }

    if (!validatePasswordFormat(password)) {
      setPasswordHelperText('*비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다.');
      setPasswordHelperVisible(true);
      valid = false;
    } else {
      setPasswordHelperText('');
      setPasswordHelperVisible(false);
    }

    if (valid) {
      console.log('로그인 시도');
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

  const handleEmailChange = () => {
    const email = emailRef.current.value;
    if (email && !validateEmailFormat(email)) {
      setEmailHelperText('*올바른 이메일 주소 형식을 입력해주세요. (예: example@example.com)');
      setEmailHelperVisible(true);
    } else {
      setEmailHelperText('');
      setEmailHelperVisible(false);
    }
  };

  const handlePasswordChange = () => {
    const password = passwordRef.current.value;
    if (password && !validatePasswordFormat(password)) {
      setPasswordHelperText('*비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다.');
      setPasswordHelperVisible(true);
    } else {
      setPasswordHelperText('');
      setPasswordHelperVisible(false);
    }
  };

  return (
    <Container>
      <Header />
      <Title>로그인</Title>
      <InputBox>
        <InputContainer>
          <Input
            type="email"
            placeholder="이메일을 입력하세요"
            ref={emailRef}
            onChange={handleEmailChange}
          />
          {emailHelperVisible && <HelperText>{emailHelperText}</HelperText>}
        </InputContainer>
        <InputContainer>
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            ref={passwordRef}
            onChange={handlePasswordChange}
          />
          {passwordHelperVisible && <HelperText>{passwordHelperText}</HelperText>}
        </InputContainer>
      </InputBox>
      <ButtonContainer>
        <BigButton
          text="로그인"
          onClick={handleLogin}
        />
      </ButtonContainer>
      <ButtonContainer>
        <SignUpLink
          text="회원가입"
          to="/joinmember"
        />
      </ButtonContainer>
    </Container>
  );
};

// 스타일링된 컴포넌트
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Title = styled.h2`
  margin-top: 100px;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;

const InputBox = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
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
`;

const HelperText = styled.p`
  position: absolute;
  top: 100%;
  left: 0;
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const ButtonContainer = styled.section`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export default LoginPage;
