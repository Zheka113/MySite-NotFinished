import React from 'react';
import postsStyle from './myposts.module.css';

const MyPosts = () => {
    return (
        <div className={postsStyle.posts}>
                <h3>My Posts</h3>
                <textarea></textarea>
                <br/>
                <button>Send</button>
        </div>
    );
}

export default MyPosts;