import React from 'react';
import PostStyle from './postclone.module.css'

const Post = (props) => {
    return (
        <div className={PostStyle.Post}>
            <img src="https://www.clipartmax.com/png/full/35-352579_spotify-logo-logo-spotify.png" className={PostStyle.CommentLogo}/>
            <div className={PostStyle.CommentText}>{props.text}</div>
            <div className={PostStyle.Like}><img src="https://avatanplus.com/files/resources/original/57bdd5703bb81156bd89be75.png"/>{props.like}</div>
        </div>
    );
}

export default Post;