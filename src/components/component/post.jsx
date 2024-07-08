import React from 'react';
import '../styles/post.css';

const Post = () => {
  return (
    <div className="posts-container">
      <div className="post">
        <div className="post-header">
          <h2 id="postTitle">제목1</h2>
          <section className="post-details">
            <section className="author">
              <span className="gray-circle"></span>
              <p className="post-author">더미 작성자1</p>
              <span className="date">
                <span className="time"></span>
              </span>
            </section>
            <span className="buttons">
              <button className="edit-button">수정</button>
              <button className="delete-button">삭제</button>
            </span>
          </section>
          <hr />
        </div>
        <div className="post-content">
          <div className="post-image"></div>
          <div className="post-text">
            무엇을 얘기할까요? 아무말이라면, 삶은 항상 놀라운 모험이라고 생각합니다. 우리는 매일 새로운 경험을 하고 배우며 성장합니다. 때로는 어려움과 도전이 있지만, 그것들이 우리를 더 강하고 지혜롭게 만듭니다. 또한 우리는 주변의 사람들과 연결되며 사랑과 지지를 받습니다. 그래서 우리의 삶은 소중하고 의미가 있습니다.
            자연도 아름다운 이야기입니다. 우리 주변의 자연은 끝없는 아름다움과 신비로움을 담고 있습니다. 산, 바다, 숲, 하늘 등 모든 것이 우리를 놀라게 만들고 감동시킵니다. 자연은 우리의 생명과 안정을 지키며 우리에게 힘을 주는 곳입니다.
            마지막으로, 지식을 향한 탐구는 항상 흥미로운 여정입니다. 우리는 끝없는 지식의 바다에서 배우고 발견할 수 있으며, 이것이 우리를 더 깊이 이해하고 세상을 더 넓게 보게 해줍니다. 그런 의미에서, 삶은 놀라움과 경이로움으로 가득 차 있습니다. 새로운 경험을 즐기고 항상 앞으로 나아가는 것이 중요하다고 생각합니다.
          </div>
        </div>
        <section className="count-comments">
          <div className="post-count">123<br />조회수</div>
          <div className="comment-count">123<br />댓글</div>
        </section>
      </div>
    </div>
  );
};

export default Post;