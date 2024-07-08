import React, { useState } from 'react';
import '../styles/postform.css';

const FormComponent = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Image:', image);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='write-post-group'>
        <div className="post-group">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="제목을 입력해주세요.(최대 26글자)"
            maxLength="26"
            required
          />
        </div>
        <div className="post-group">
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            name="content"
            rows="20"
            value={content}
            onChange={handleContentChange}
            placeholder="내용을 입력해주세요."
            required
          ></textarea>
          <h3 className="helper-text">*helper text</h3>
        </div>
        <div className="post-group">
          <label htmlFor="image">이미지</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
      </div>
    </form>
  );
};

export default FormComponent;
