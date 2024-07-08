import React from 'react';
import Header from '../components/component/header';
import styled from 'styled-components';
import InputProfile from '../components/component/uploadprofile';
import Input from '../components/component/inputbox';
import BigButton from '../components/component/bigbtn';
import SignUpLink from '../components/component/link';
import SmallButton from '../components/component/smallbtn';

const EditprofilePage = () => {
    const handlePF = () => {
        console.log('프로필 수정');
    };
    const handleDEL = () => {
        console.log('회원 탈퇴');
    };

    return (
        <div>
            <Header showProfileImage={true} />
            <Title>회원정보 수정</Title>
            <ProfileForm>
                <Profile>프로필 사진</Profile>
                <InputProfile />
                <Label>이메일</Label>
                <Label>collie.jun@groom.com</Label>
            </ProfileForm>
            <Input 
                label="닉네임"
                type="nickname"
                name="nickname"
                placeholder="collie.jun"
                className="nickname"
                helperText="*helper text"
            />
            <BigButton
                text="수정하기"
                onClick={handlePF}
                className="submit"
            />
            <SignUpLink 
                text="회원 탈퇴"
                onClick={handleDEL}
            />
            <ButtonContainer>
                <SmallButton text="수정완료" />
            </ButtonContainer>
        </div>
    );
};

const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    line-height: 38.19px;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 100px;
`;

const Profile = styled.h3`
    font-weight: 700;
    line-height: 17.9px;
    margin-bottom: 5px; 
    width: 392px; 
    align-items: flex-start;
`;

const ProfileForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Label = styled.h4`
    font-weight: 700;
    line-height: 17.9px;
    margin-bottom: 5px; 
    margin-top: 5px;
    width: 392px; 
    align-items: flex-start;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px; /* 필요에 따라 간격 조절 */
`;

export default EditprofilePage;
