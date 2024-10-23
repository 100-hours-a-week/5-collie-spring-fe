import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import CollieLandTitle from '../../src/components/images/collie_land_title.png';
import FootprintImage from '../../src/components/images/collie_4.png'; 
import CollieImage from '../../src/components/images/collie_5.png'; 
import BottomImageSrc from '../../src/components/images/bottom.png'; 
import UserProfileSrc from '../../src/components/images/image1.png'; 


import PostImageSrc1 from '../../src/components/images/post/IMG_0404.jpeg'; 
import PostImageSrc2 from '../../src/components/images/post/IMG_1076.jpeg'; 
import PostImageSrc3 from '../../src/components/images/post/IMG_2301.jpeg'; 
import PostImageSrc4 from '../../src/components/images/post/IMG_3336.jpeg'; 
import PostImageSrc5 from '../../src/components/images/post/IMG_3681.jpeg'; 
import PostImageSrc6 from '../../src/components/images/post/IMG_4015.jpeg'; 
import PostImageSrc7 from '../../src/components/images/post/IMG_7601.jpeg'; 
import PostImageSrc8 from '../../src/components/images/post/IMG_8397.jpeg'; 
import PostImageSrc9 from '../../src/components/images/post/IMG_8480.jpeg'; 
import PostImageSrc10 from '../../src/components/images/post/IMG_8488.jpeg'; 
import PostImageSrc11 from '../../src/components/images/post/IMG_8625.jpeg'; 
import PostImageSrc12 from '../../src/components/images/post/IMG_8824.jpeg'; 
import PostImageSrc13 from '../../src/components/images/post/IMG_9126.jpeg'; 
import PostImageSrc14 from '../../src/components/images/post/IMG_9341.jpeg'; 

const posts = [
    { title: "1번 게시물", likes: 10, comments: 5, views: 20, author: "콜리", images: [PostImageSrc1, PostImageSrc2, PostImageSrc3] },
    { title: "2번 게시물", likes: 7, comments: 2, views: 15, author: "콜리", images: [PostImageSrc4, PostImageSrc5, PostImageSrc6] },
    { title: "3번 게시물", likes: 3, comments: 1, views: 8, author: "콜리", images: [PostImageSrc7, PostImageSrc8, PostImageSrc9] },
    { title: "4번 게시물", likes: 6, comments: 3, views: 18, author: "콜리", images: [PostImageSrc10, PostImageSrc11, PostImageSrc12] },
    { title: "5번 게시물", likes: 8, comments: 4, views: 22, author: "콜리", images: [PostImageSrc13, PostImageSrc14, PostImageSrc1] },
];

const POSTS_PER_PAGE = 3;

const App = () => {
    const currentDate = new Date().toLocaleString();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(""); 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
    const dropdownRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false); // 드롭다운 바깥을 클릭했을 때 닫기
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const filteredPosts = posts.filter(
        post => post.title.includes(searchTerm) || post.author.includes(searchTerm)
    );

    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0); 
    };

    const renderPageNumbers = () => {
        const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
        return (
            <Pagination>
                {Array.from({ length: totalPages }, (_, index) => (
                    <PageButton
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        isActive={currentPage === index + 1}
                    >
                        {index + 1}
                    </PageButton>
                ))}
            </Pagination>
        );
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMyPage = () => {
        alert('마이페이지로 이동합니다!');
        setIsDropdownOpen(false); // 드롭다운 닫기
    };

    const handleLogout = () => {
        alert('로그아웃되었습니다.');
        setIsDropdownOpen(false); // 드롭다운 닫기
    };

    return (
        <Container>
          <HeaderImage src={CollieLandTitle} alt="Collie Land Title" />
          
          {/* 검색 기능 추가 */}
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="게시물 제목 또는 작성자를 검색하세요"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>

          <PostList>
            {currentPosts.map((post, index) => (
              <PostItem key={index}>
                <PostBox
                  title={post.title}
                  likes={post.likes}
                  comments={post.comments}
                  views={post.views}
                  date={currentDate}
                  author={post.author}
                  images={post.images}
                />
              </PostItem>
            ))}
          </PostList>
          {renderPageNumbers()}
          <RightBottomImage src={FootprintImage} alt="footprint" />
          <LeftBottomImage src={CollieImage} alt="collie" />
          <BottomImage src={BottomImageSrc} alt="bottom" /> {/* 추가된 이미지 */}

          {/* 사용자 프로필 추가 */}
          <ProfileImage onClick={toggleDropdown} src={UserProfileSrc} alt="user profile" />
          {isDropdownOpen && (
            <DropdownMenu ref={dropdownRef}>
              <DropdownItem onClick={handleMyPage}>마이페이지</DropdownItem>
              <DropdownItem onClick={handleLogout}>로그아웃</DropdownItem>
            </DropdownMenu>
          )}

          {/* 게시물 작성하기 버튼 */}
          <CreatePostButton onClick={() => alert('게시물 작성 페이지로 이동합니다!')}>
            게시물 작성하기
          </CreatePostButton>
        </Container>
    );
};

const PostBox = ({ title, likes, comments, views, date, author, images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <PostContainer>
            <PostTitle>{title}</PostTitle>
            <PostInfo>
              <span>{author}</span>
              <span>{date}</span>
            </PostInfo>
            <PostImageWrapper>
                <ArrowButton onClick={handlePrevImage}>{"<"}</ArrowButton>
                <PostImageStyled src={images[currentImageIndex]} alt="Post" />
                <ArrowButton onClick={handleNextImage}>{">"}</ArrowButton>
            </PostImageWrapper>
            <PostStats>
                <span>👍 {likes}</span>
                <span>💬 {comments}</span>
                <span>👁 {views}</span>
            </PostStats>
        </PostContainer>
    );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  width: 100%;
  min-height: 100vh;
  background-color: #bdc45e;
  position: relative; 
`;

const HeaderImage = styled.img`
  width: 300px;
  margin-top: 20px;
  height: auto;
`;

const SearchContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 400px;
  padding: 10px;
  height: 28px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 50px;
  outline: none;

  &:focus {
    border-color: black;
  }
`;

const PostList = styled.ul`
  width: 100%;
  max-width: 592px; 
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 1;
`;

const PostItem = styled.li`
  width: 100%;
`;

const PostContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  padding: 20px;
  width: 100%;
  max-width: 592px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box; 
`;

const CreatePostButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: black;
  border: none;
  border-radius: 50px;
  padding: 15px 30px;
  font-size: 18px;
  color: white;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #f6b246;
  }
`;

const ProfileImage = styled.img`
  position: fixed;
  top: 20px;
  right: 40px;
  width: 60px;
  height: 60px;
  border-radius: 50%; 
  object-fit: cover;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 2;

  &:hover {
    opacity: 0.8;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 90px;
  right: 40px;
  width: 200px; 
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 3;
`;

const DropdownItem = styled.div`
  padding: 10px 20px;
  width: 200px; 
  font-size: 14px;
  cursor: pointer;
  color: black;

  &:hover {
    background-color: #f6b246;
    width: 200px;
  }
`;

const PostTitle = styled.h3`
  margin: 0;
  font-size: 20px;
`;

const PostInfo = styled.div`
  margin-top: 10px;
  color: #555;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`;

const PostStats = styled.div`
  margin-top: 10px;
  color: #999;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`;

const PostImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  position: relative;
  width: 100%;
  height: 500px;
`;

const PostImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const ArrowButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  &:first-of-type {
    left: 10px;
  }

  &:last-of-type {
    right: 10px;
  }
`;

const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const PageButton = styled.button`
  background-color: ${({ isActive }) => (isActive ? 'black' : 'white')};
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
  border: 1px solid black;
  border-radius: 50px;
  padding: 10px 15px;
  cursor: pointer;
  margin-bottom: 50px;
  z-index: 2;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const RightBottomImage = styled.img`
  position: fixed;
  bottom: 20px;
  right: 5vw;
  height: auto;
  max-width: 30vw;
  z-index: 1; 
  @media (max-width: 768px) {
    right: 10px;
    width: 80px;
  }
`;

const LeftBottomImage = styled.img`
  position: fixed;
  bottom: 20px;
  left: -20vw;
  height: auto;
  width: 900px;
  max-width: 50vw;
  z-index: 1; 
  @media (max-width: 1000px) {
    left: 10px;
    width: 80px;
  }
`;

const BottomImage = styled.img`
  position: fixed; 
  bottom: 0;
  left: 0;
  width: 100%; 
  height: auto;
  z-index: 0; 
`;

