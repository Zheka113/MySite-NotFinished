import React, { createRef } from 'react';
import style from './myposts.module.css';

const MyPosts = ({ postData, newPostText, newPost, updatePostText }) => {

    let messageText = createRef();

    const updateText = () => {
        updatePostText(messageText.current.value);
    }

    return (
        <div className={style.posts}>
            <h3>My Posts</h3>
            <textarea ref={messageText} value={newPostText} onChange={updateText}></textarea>
            <br />
            <button onClick={() => {newPost()}}>Send</button>
        </div>
    );
}

export default MyPosts;