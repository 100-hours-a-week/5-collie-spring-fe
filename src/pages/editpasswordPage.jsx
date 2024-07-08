import React from 'react';
import Header from '../components/component/header';
import Input from '../components/component/inputbox';
import styled from 'styled-components';
import BigButton from '../components/component/bigbtn';

const EditpwdPage = () => {
    const handleEPW = () => {
        console.log('비밀번호 수정');
      };

    return (
        <div>
        <Header showProfileImage={true} />
        <Container>
            <Title>비밀번호 수정</Title>
            <Input 
            label="비밀번호"
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요"
            className="password"
            helperText="*helper text"
            />
            <Input 
            label="비밀번호 확인"
            type="password"
            name="password"
            placeholder="비밀번호를 한번 더 입력하세요"
            className="checkpassword"
            helperText="*helper text"
            />
            <BigButton
            text="수정하기"
            onClick={handleEPW} // 이벤트 핸들러를 onClick으로 전달
            className="submit" />
        </Container>
        </div>
    );
};

// Container 스타일 적용
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

// Title 스타일 적용
const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    line-height: 38.19px;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 150px;
`;



export default EditpwdPage;
