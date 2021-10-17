import React from 'react';
import styles from './profile.module.css';
import ProfileStatus from './ProfileCompo/ProfileStatus';
import MyPosts from './ProfileCompo/MyPosts';
import Post from './ProfileCompo/PostClone';

// let postData = [
//     {text:'My first post', like:"5"},
//     {text:'Do you like music?', like:"7"},
//     {text:'It is a logo by Sportify', like:"15"},
//     {text:'I can better', like:"9"},
//     {text:'Belive me', like:"0"}
// ]

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