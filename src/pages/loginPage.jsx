import React from 'react';
import Header from '../components/component/header';
import Input from '../components/component/inputbox';
import BigButton from '../components/component/bigbtn';
import SignUpLink from '../components/component/link';
import styled from 'styled-components';

const App = () => {
    const handleLogin = () => {
        console.log('로그인 시도');
      };  

      const handleSignUp = () => {
        console.log('회원가입 이동');
      };  

  return (
    <div>
      <Header />
      <Title>로그인</Title>
      <Input 
      label="이메일"
      type="email"
      name="email"
      placeholder="이메일을 입력하세요"
      className="email"
     />
     <Input 
      label="password"
      type="password"
      name="password"
      placeholder="비밀번호를 입력하세요"
      className="password"
      helperText="*helper text"
     />
     <BigButton
      text="로그인"
      onClick={handleLogin} // 이벤트 핸들러를 onClick으로 전달
      className="submit" />
    <SignUpLink 
      text="회원가입"
      onClick={handleSignUp}/>
    </div>
  );
};

// Title 스타일 적용
const Title = styled.h2`
margin-top: 140px;
margin-bottom: 20px;
font-size: 32px;
font-weight: 700;
line-height: 38.19px;
text-align: center;
`;

export default App;
