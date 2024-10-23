import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import CollieLandTitle from '../../src/components/images/collie_land_title.png';
import SignUpCompleteModal from '../../src/components/component/signUpCompleteModal'; 
import styled from 'styled-components';
import FootprintImage from '../../src/components/images/footprint.png'; 
import CollieImage from '../../src/components/images/collie_3.png'; 

const JoinMemberPage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [emailHelperText, setEmailHelperText] = useState(''); 
  const [nickname, setNickname] = useState(''); 
  const [showModal, setShowModal] = useState(false); 
  const fileInputRef = useRef(null);

  const navigate = useNavigate(); 

  const handleLoginMove = () => {
    navigate('/'); 
  };

  const handleLogin = () => {
    navigate('/'); 
  };

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
    const emailValue = e.target.email.value;
    const passwordValue = e.target.password.value;
    const confirmPasswordValue = e.target.confirmPassword.value;
    const nicknameValue = e.target.nickname.value;

    if (!profileImage) {
      newErrors.profileImage = '*프로필 사진을 선택하세요.';
    }

    if (!emailValue) {
      newErrors.email = '*이메일을 입력하세요.';
    } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
      newErrors.email = '*유효한 이메일 주소를 입력하세요.';
    }

    if (!passwordValue) {
      newErrors.password = '*비밀번호를 입력하세요.';
    } else if (passwordValue.length < 8) {
      newErrors.password = '*8자 이상이어야 합니다.';
    }

    if (passwordValue !== confirmPasswordValue) {
      newErrors.confirmPassword = '*비밀번호가 일치하지 않습니다.';
    }

    if (!nicknameValue) {
      newErrors.nickname = '*닉네임을 입력하세요.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setNickname(nicknameValue);
      setShowModal(true);
    }
  };

  const handleEmailCheck = () => {
    setEmailHelperText('사용 가능한 이메일입니다.');
    setTimeout(() => {
      setEmailHelperText('');
    }, 3000);
  };

  const handleCloseModal = () => {
    setShowModal(false); 
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
          <HelperText visible={!!errors.email || !!emailHelperText}>
            {emailHelperText || errors.email}
          </HelperText>
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
          <BigButton type="submit">회원가입</BigButton>
        </ButtonWrapper>

        <LinkWrapper>
          <Label>이미 가입 하셨나요?</Label>
        </LinkWrapper>
        <CustomLink onClick={handleLogin}>로그인하러 가기</CustomLink>
      </FormWrapper>

      {showModal && (
        <SignUpCompleteModal 
          profileImage={profileImage} 
          nickname={nickname} 
          onClose={handleCloseModal} 
          onGoToLogin={handleLoginMove} 
        />
      )}

      <RightBottomImage src={FootprintImage} alt="footprint" />
      
      <LeftBottomImage src={CollieImage} alt="collie" />
    </Container>
  );
};

const CustomLink = styled.button`
  background: none;
  border: none;
  color: black;
  margin-top: 10px;
  text-decoration: underline;
  cursor: pointer;
  font-size: 16px;

`;

const BigButton = styled.button`
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

const RightBottomImage = styled.img`
  position: absolute;
  bottom: 20px;
  right: 20px;
  height: auto;
  max-width: 30vw; 
  @media (max-width: 768px) {
    width: 80px;
  }
`;

const LeftBottomImage = styled.img`
  position: absolute;
  bottom: 20px;
  left: 70px;
  height: auto;
  width: 350px;
  max-width: 40vw;
  @media (max-width: 768px) {
    width: 80px;
  }
`;

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
  position: relative; 
`;

const FormWrapper = styled.form`
  width: 500px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
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
  width: 400px;
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
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const LinkWrapper = styled.div`
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
  color: #888;
`;

export default JoinMemberPage;
