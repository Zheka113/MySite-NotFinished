import React from 'react';
import postsStyle from './myposts.module.css';

function Addpost(){
    console.log('gg')
}

const MyPosts = () => {
    return (
        <div className={postsStyle.posts}>
                <h3>My Posts</h3>
                <textarea></textarea>
                <br/>
                <button onClick={Addpost()}>Send</button>
        </div>
    );
}

export default MyPosts;