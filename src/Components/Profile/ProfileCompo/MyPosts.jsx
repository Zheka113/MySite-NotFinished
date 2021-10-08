import React from 'react';
import PostsStyle from './myposts.module.css';

const MyPosts = () => {
    return (
        <div className={PostsStyle.Posts}>
                <h3>My Posts</h3>
                <textarea name="your news" id=""></textarea>
                <br/>
                <button>Send</button>
        </div>
    );
}

export default MyPosts;