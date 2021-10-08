import React from 'react';
import postStyle from './postclone.module.css'

const Post = ({ text, like }) => {
    return (
        <div className={postStyle.post}>
            <img src="https://www.clipartmax.com/png/full/35-352579_spotify-logo-logo-spotify.png" className={postStyle.commentLogo} />
            <div className={postStyle.comment}>
                <div className={postStyle.commentText}>{text}</div>
                <div className={postStyle.like}><img src="https://avatanplus.com/files/resources/original/57bdd5703bb81156bd89be75.png" />{like}</div>
            </div>
        </div>
    );
}

export default Post;