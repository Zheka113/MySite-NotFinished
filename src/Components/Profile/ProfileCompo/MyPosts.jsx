import React, { createRef } from 'react';
import style from './myposts.module.css';

const MyPosts = ({ postData, posts, newPost }) => {

    let messageText = React.createRef();

    function addPostClick() {
        if(messageText.current.value==''){
            alert('Write text!')
        }else{
            newPost(messageText.current.value)
            console.log(postData);
            messageText.current.value=''
        }
    }

    return (
        <div className={style.posts}>
            <h3>My Posts</h3>
            <textarea ref={messageText}></textarea>
            <br />
            <button onClick={addPostClick}>Send</button>
        </div>
    );
}

export default MyPosts;