import React from 'react';
import styles from './profile.module.css';
import ProfileStatus from './ProfileCompo/ProfileStatus';
import MyPosts from './ProfileCompo/MyPosts';
import Post from './ProfileCompo/PostClone';

//В комментах под видео человек написал:
//"В 2021 году можно так:
//<Route exact path="/profile">
//         <Profile />
//</Route>
//
//Ну и через child func"
//Обьяснишь?

const ProfileContent = ({postData}) => {

    let posts = postData.map( p => <Post text={p.text} like={p.like} /> );

    return (
        <div className={styles.profileContent}>
            <ProfileStatus />
            <MyPosts />
            <div>
                { posts }
            </div>
        </div>
    );
}

export default ProfileContent;