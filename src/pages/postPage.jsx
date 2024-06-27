import React from 'react';
import Header from '../components/component/header';
import SmallButton from '../components/component/smallbtn';
import PostBox from '../components/component/postbox';
import styled from 'styled-components';

const App = () => {
    const currentDate = new Date().toLocaleString(); // 현재 시간 문자열 생성

    return (
        <Container>
          <Header showProfileImage={true} />
          <Title>안녕하세요,<br />아무 말 대잔치 <span className="bold-text">게시판</span>입니다.</Title>
          <PostList>
            <SmallButton text="게시글 작성" />
            <PostItem>
              <PostBox 
                title="1번 게시물" 
                likes={0}
                comments={0}
                views={0}
                date={currentDate}
                author="더미 작성자1"
              />
            </PostItem>
          </PostList>
        </Container>
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
  text-align: center;
  margin-top: 30px;
  .bold-text {
    font-weight: bold;
  }
`;

const PostList = styled.ul`
  width: 592px;
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; // 각 PostItem 간의 간격 조정
`;

const PostItem = styled.li`
    width: 100%;
`;

export default App;
