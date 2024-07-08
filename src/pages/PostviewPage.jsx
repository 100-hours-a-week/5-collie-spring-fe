import React from 'react';
import Header from '../components/component/header';
import Post from '../components/component/post';
import CommentInput from '../components/component/writecomment';
import Comment from '../components/component/comment';


const Postview = () => {

    const handleEdit = () => {
        console.log('Edit button clicked');
      };
    
      const handleDelete = () => {
        console.log('Delete button clicked');
      };

    return (
        <div>
            <Header showProfileImage={true} showBeforeButton={true}/>
            <Post />
            <CommentInput />
            <div className="comment-wrapper">
            <Comment
            author="더미 작성자1"
            date="2021-01-01 00:00:00"
            content="이것은 덧글 내용입니다."
            onEdit={handleEdit}
            onDelete={handleDelete}
            />
            </div>
        
        </div>
        );
    };

    export default Postview;