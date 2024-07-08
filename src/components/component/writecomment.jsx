import React, { useState } from 'react';
import '../styles/writecomment.css';

const CommentInput = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    // 댓글 등록 로직을 여기에 추가하세요
    console.log('댓글:', comment);
    setComment(''); // 댓글 등록 후 입력 필드 초기화
  };

  return (
    <section className="comment">
      <section className="comment-input-container">
        <textarea
          className="comment-input"
          placeholder="댓글을 입력하세요"
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <button className="comment-submit-button" onClick={handleCommentSubmit}>
          댓글 등록
        </button>
      </section>
    </section>
  );
};

export default CommentInput;
