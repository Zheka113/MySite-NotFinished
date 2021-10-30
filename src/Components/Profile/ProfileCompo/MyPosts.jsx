import React, { createRef } from 'react';
import style from './myposts.module.css';

const MyPosts = ({ postData, newPost, newPostText, updatePostText }) => {

    let messageText = React.createRef();

    function addPostClick() {
        newPost()
    }
    function updateText() {
        updatePostText(messageText.current.value);
    }

    return (
        <div className={style.posts}>
            <h3>My Posts</h3>
            <textarea ref={messageText} value={newPostText} onChange={updateText}></textarea>
            <br />
            <button onClick={addPostClick}>Send</button>
        </div>
    );
}

export default MyPosts;