import React from 'react';
import '../styles/comment.css';

const Comment = ({ author, date, content, onEdit, onDelete }) => {
  return (
    <article className="comment-container">
      <div className="comment-header">
        <section className="comment-author">
          <span className="comment-gray-circle"></span>
          <span className="comment-author-name">{author}</span>
          <time className="comment-date">{date}</time>
        </section>
        <nav className="comment-buttons">
          <button className="comment-edit-button" onClick={onEdit}>수정</button>
          <button className="comment-delete-button" onClick={onDelete}>삭제</button>
        </nav>
      </div>
      <p className="comment-content">{content}</p>
    </article>
  );
};

export default Comment;
