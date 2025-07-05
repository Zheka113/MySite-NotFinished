import React from 'react';
import styles from './profile.module.css';
import ProfileStatus from './ProfileCompo/ProfileStatus';
import MyPosts from './ProfileCompo/MyPosts';
import Post from './ProfileCompo/PostClone';

const ProfileContent = ({postData, newPostText, newPost, updatePostText}) => {

    let posts = postData.map((p, index) => <Post text={p.text} like={p.like}/> );

    return (
        <div className={styles.profileContent}>
            <ProfileStatus />
            <MyPosts 
            postData={postData} 
            newPost={newPost} 
            newPostText={newPostText} 
            updatePostText={updatePostText} />
            <div>
                { posts }
            </div>
        </div>
    );
}

export default ProfileContent;