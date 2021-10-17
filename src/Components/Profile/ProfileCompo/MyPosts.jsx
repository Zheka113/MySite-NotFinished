import React from 'react';
import postsStyle from './myposts.module.css';

function addPostClick(e) {
    console.log(e)
}
function textareaValueChange(e) {
    let a = e.target.value
    console.log(a);
}

const MyPosts = () => {
    return (
        <div className={postsStyle.posts}>
            <h3>My Posts</h3>
            <textarea onChange={textareaValueChange}></textarea>
            <br />
            <button onClick={addPostClick}>Send</button>
        </div>
    );
}

export default MyPosts;