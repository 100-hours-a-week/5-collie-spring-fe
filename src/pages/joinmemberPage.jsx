import React from 'react';
import Header from '../components/component/header';
import Input from '../components/component/inputbox';
import BigButton from '../components/component/bigbtn';
import SignUpLink from '../components/component/link';
import InputProfile from '../components/component/uploadprofile';
import styled from 'styled-components';

const joinmemberPage = () => {
  const handleJoin = () => {
    console.log('회원가입 시도');
  };

  const handleLoginMove = () => {
    console.log('로그인 이동');
  };

  return (
    <div>
      <Header showBeforeButton={true} />
      <Title>회원가입</Title>
      <ProfileContainer>
        <Profile>프로필 사진</Profile>
        <ProfileHelper>*helperText*</ProfileHelper>
      </ProfileContainer>
      <InputProfile />
      <Input
        label="이메일*"
        type="email"
        name="email"
        placeholder="이메일을 입력하세요"
        className="email"
        helperText="*helper text"
      />
      <Input
        label="비밀번호*"
        type="password"
        name="password"
        placeholder="비밀번호를 입력하세요"
        className="password"
        helperText="*helper text"
      />
      <Input
        label="비밀번호 확인*"
        type="password"
        name="password"
        placeholder="비밀번호를 다시 입력하세요"
        className="checkpassword"
        helperText="*helper text"
      />
      <Input
        label="닉네임*"
        type="nickname"
        name="nickname"
        placeholder="닉네임을 입력하세요"
        className="nickname"
        helperText="*helper text"
      />
      <BigButton
        text="회원가입"
        onClick={handleJoin}
        className="submit"
      />
      <SignUpLink
        text="로그인하러 가기"
        onClick={handleLoginMove}
      />
    </div>
  );
};

// Title 스타일 적용
const Title = styled.h2`
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 700;
  line-height: 38.19px;
  text-align: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 
`;

const Profile = styled.h3`
  font-size: 15px;
  font-weight: 700;
  line-height: 17.9px;
  margin-bottom: 5px; 
  width: 392px; 
  align-items: flex-start;
`;

const ProfileHelper = styled.h4`
  font-size: 12px;
  font-weight: 400;
  line-height: 14.52px;
  color: #FF0000;
  width: 392px; 
  align-items: flex-start;
`;

export default joinmemberPage;
