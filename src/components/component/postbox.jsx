import React from 'react';
import '../styles/postbox.css';

const Post = ({ title, likes, comments, views, date, author }) => {
  return (
    <div className="post-container">
      <h3 className="post-title">{title}</h3>
      <div className="post-info">
        <div className="like-comment">
          <span className="post-likes">좋아요 {likes}</span>
          <span className="post-comments">댓글 {comments}</span>
          <span className="post-views">조회수 {views}</span>
        </div>
        <span className="post-date">{date}</span>
      </div>
      <hr />
      <div className="author">
        <div className="gray-circle"></div>
        <p className="post-author">{author}</p>
      </div>
    </div>
  );
};

export default Post;
