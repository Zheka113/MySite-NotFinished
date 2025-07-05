import React, { useState } from 'react';
import styles from './postclone.module.css'

const Post = ({ text, like }) => {
    const [postLike, setPostLike] = useState(like)
    function likesCounter(){
        setPostLike(postLike +1)
    }
    

    return (
        <div className={styles.post}>
            <img src="https://www.clipartmax.com/png/full/35-352579_spotify-logo-logo-spotify.png" className={styles.commentLogo} />
            <div className={styles.comment}>
                <div className={styles.commentText}>{text}</div>
                <div className={styles.like}>
                    <img src="https://avatanplus.com/files/resources/original/57bdd5703bb81156bd89be75.png" 
                    onClick={ () => {
                        likesCounter()
                    }} /> {postLike}
                </div>
            </div>
        </div>
    );
}

export default Post;