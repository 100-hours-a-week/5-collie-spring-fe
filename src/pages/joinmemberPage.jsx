import React, { useState, useRef } from 'react';
import BigButton from '../components/component/bigbtn';
import SignUpLink from '../components/component/link';
import CollieLandTitle from '../../src/components/images/collie_land_title.png';
import styled from 'styled-components';

const JoinMemberPage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleJoin = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!profileImage) {
      newErrors.profileImage = '*프로필 사진을 선택하세요.';
    }

    if (!e.target.email.value) {
      newErrors.email = '*이메일을 입력하세요.';
    } else if (!/\S+@\S+\.\S+/.test(e.target.email.value)) {
      newErrors.email = '*유효한 이메일 주소를 입력하세요.';
    }

    if (!e.target.password.value) {
      newErrors.password = '*비밀번호를 입력하세요.';
    } else if (e.target.password.value.length < 8) {
      newErrors.password = '*8자 이상이어야 합니다.';
    }

    if (e.target.password.value !== e.target.confirmPassword.value) {
      newErrors.confirmPassword = '*비밀번호가 일치하지 않습니다.';
    }

    if (!e.target.nickname.value) {
      newErrors.nickname = '*닉네임을 입력하세요.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // 회원가입 성공 모달을 나중에 추가할 예정이므로 관련 코드는 제거
      console.log('회원가입 시도');
    }
  };

  const handleEmailCheck = () => {
    console.log('사용 가능한 메일입니다.');
  };

  const handleLoginMove = () => {
    console.log('로그인 이동');
  };

  return (
    <Container>
      <HeaderImage src={CollieLandTitle} alt="Collie Land Title" />
      <FormWrapper onSubmit={handleJoin}>
        <Title>회원가입</Title>
        <ProfileContainer>
          <Profile>프로필 사진</Profile>
          <ProfileImageWrapper onClick={handleImageClick}>
            {profileImage ? (
              <ProfileImage src={profileImage} alt="Profile Preview" />
            ) : (
              <DefaultProfileImage>이미지 없음</DefaultProfileImage>
            )}
          </ProfileImageWrapper>
          <ProfileInput 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            ref={fileInputRef} 
            style={{ display: 'none' }} 
          />
          {errors.profileImage && <HelperText>{errors.profileImage}</HelperText>}
        </ProfileContainer>

        <InputFieldContainer>
          <Label>이메일*</Label>
          <InputGroup>
            <StyledInput type="email" name="email" placeholder="이메일을 입력하세요" />
            <CheckButton type="button" onClick={handleEmailCheck}>중복확인</CheckButton>
          </InputGroup>
          <HelperText visible={!!errors.email}>{errors.email}</HelperText>
        </InputFieldContainer>

        <InputFieldContainer>
          <Label>비밀번호*</Label>
          <StyledInput type="password" name="password" placeholder="비밀번호를 입력하세요" />
          <HelperText visible={!!errors.password}>{errors.password}</HelperText>
        </InputFieldContainer>

        <InputFieldContainer>
          <Label>비밀번호 확인*</Label>
          <StyledInput type="password" name="confirmPassword" placeholder="비밀번호를 다시 입력하세요" />
          <HelperText visible={!!errors.confirmPassword}>{errors.confirmPassword}</HelperText>
        </InputFieldContainer>

        <InputFieldContainer>
          <Label>닉네임*</Label>
          <StyledInput type="text" name="nickname" placeholder="닉네임을 입력하세요" />
          <HelperText visible={!!errors.nickname}>{errors.nickname}</HelperText>
        </InputFieldContainer>

        <ButtonWrapper>
          <BigButton text="회원가입" type="submit" className="submit" />
        </ButtonWrapper>

        <LinkWrapper>
          <SignUpLink text="로그인하러 가기" onClick={handleLoginMove} />
        </LinkWrapper>
      </FormWrapper>
    </Container>
  );
};

// 스타일링 부분
const HeaderImage = styled.img`
  width: 300px;
  margin-top: 20px;
  height: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f6d46b;
`;

const FormWrapper = styled.form`
  width: 400px;
  padding: 20px;
  margin-bottom: 100px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #333;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const Profile = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #333;
`;

const HelperText = styled.p`
  font-size: 12px;
  color: #FF5555;
  margin-top: 5px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

const ProfileImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 10px;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DefaultProfileImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
  font-size: 14px;
`;

const ProfileInput = styled.input`
  margin-top: 10px;
`;

const InputFieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
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

const CheckButton = styled.button`
  padding: 8px 12px;
  margin-left: 10px;
  width: 90px;
  height: 40px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const LinkWrapper = styled.div`
  margin-top: 15px;
  font-size: 14px;
  text-align: center;
  color: #888;
`;

export default JoinMemberPage;
