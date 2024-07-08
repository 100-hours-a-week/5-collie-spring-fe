import React from 'react';
import Header from '../components/component/header';
import FormComponent from '../components/component/postform';
import BigButton from '../components/component/bigbtn';
import styled from 'styled-components';

const WritePost = () => {

    const handlePOST = () => {
        console.log('게시물 작성');
    };

    return (
    <div>
        <Header showProfileImage={true} showBeforeButton={true}/>
        <Title>게시물 작성</Title>
        <FormComponent />
        <BigButton
                text="완료"
                onClick={handlePOST}
                className="submit"
            />
        

    </div>
    );
};

const Title = styled.h2`
margin-bottom: 20px;
font-size: 32px;
line-height: 38.19px;
text-align: center;
`;

export default WritePost;