import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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
  { 
    title: "여름날의 보더콜리", 
    content: "여름날의 보더콜리에 대한 이야기입니다.", 
    images: [PostImageSrc1, PostImageSrc2, PostImageSrc3], 
    comments: ["너무 귀여워요!", "이 포스트 정말 좋아요."], 
    date: "2023-06-12", 
    author: "콜리" 
  },
  { 
    title: "사실 이 강아지의 이름은", 
    content: "사실 이 강아지의 이름은 콜리입니다.", 
    images: [PostImageSrc4, PostImageSrc5, PostImageSrc6], 
    comments: ["멋진 사진이에요!", "감동적이에요."], 
    date: "2023-07-08", 
    author: "콜리" 
  },
  { 
    title: "여름이입니다~", 
    content: "이 강아지의 이름은 여름입니다.", 
    images: [PostImageSrc7, PostImageSrc8, PostImageSrc9], 
    comments: ["이 강아지 어디서 만날 수 있나요?"], 
    date: "2023-08-01", 
    author: "콜리" 
  },
  { 
    title: "너무 귀엽죠?", 
    content: "이렇게 귀여운 강아지 보셨나요?", 
    images: [PostImageSrc10, PostImageSrc11, PostImageSrc12], 
    comments: ["너무 귀여워서 심장이 아파요."], 
    date: "2023-09-15", 
    author: "콜리" 
  },
  { 
    title: "축축한 여름이", 
    content: "여름날의 축축한 보더콜리.", 
    images: [PostImageSrc13, PostImageSrc14, PostImageSrc1], 
    comments: ["이 사진은 예술이에요!", "감탄을 금할 수 없네요."], 
    date: "2023-10-05", 
    author: "콜리" 
  },
];

const PostView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const postIndex = parseInt(id, 10); 
  const post = posts[postIndex];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(post.comments);

  if (!post) {
    return <Container>포스트를 찾을 수 없습니다.</Container>;
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % post.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + post.images.length) % post.images.length);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <PageContainer>
      <Container>
        <BackButton onClick={() => navigate(-1)}>← 뒤로가기</BackButton>
        <PostTitle>{post.title}</PostTitle>
        <PostInfo>
          <span>작성자: {post.author}</span>
          <span>작성일: {post.date}</span>
        </PostInfo>
        <PostContent>{post.content}</PostContent>
        <PostImages>
          <ArrowButton onClick={handlePrevImage}>{"<"}</ArrowButton>
          <Image src={post.images[currentImageIndex]} alt={`post-image-${currentImageIndex}`} />
          <ArrowButton onClick={handleNextImage}>{">"}</ArrowButton>
        </PostImages>
      </Container>
      <CommentsContainer>
        <CommentsSection>
          <h2>댓글</h2>
          {comments.map((comment, idx) => (
            <Comment key={idx}>{comment}</Comment>
          ))}
        </CommentsSection>
        <CommentForm>
          <CommentInput
            type="text"
            placeholder="댓글을 입력하세요..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <CommentButton onClick={handleAddComment}>댓글 추가</CommentButton>
        </CommentForm>
      </CommentsContainer>
    </PageContainer>
  );
};

export default PostView;


const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 50%;
  margin: 40px auto;
  background: #f6f5d0;
  padding: 30px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #444;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 30px;

  &:hover {
    text-decoration: underline;
    color: #000;
  }
`;

const PostTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #222;
  margin-bottom: 15px;
`;

const PostInfo = styled.div`
  font-size: 16px;
  color: #555;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
`;

const PostContent = styled.p`
  font-size: 20px;
  line-height: 1.8;
  margin-bottom: 30px;
  color: #333;
`;

const PostImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
`;

const ArrowButton = styled.button`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #f6b246;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 450px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CommentsContainer = styled.div`
  width: 25%;
  margin: 40px 0;
  position: relative;
`;

const CommentsSection = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const Comment = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  color: #555;
`;

const CommentForm = styled.div`
  display: flex;
  gap: 10px;
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const CommentButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #222;
  color: white;
  border: none;
  border-radius: 8px;
`;
