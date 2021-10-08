import React from 'react';
import ProfileStyles from './profile.module.css';
import ProfileStatus from './ProfileCompo/ProfileStatus';
import MyPosts from './ProfileCompo/MyPosts';
import Post from './ProfileCompo/PostClone';

const ProfileContent = () => {
    return (
        <div className={ProfileStyles.ProfileContent}>
            <ProfileStatus />
            <MyPosts />
            <div>
                <Post text='My first post' like="5" />
                <Post text='Do you like music?' like="7" />
                <Post text='It is a logo by Sportify' like="15" />
                <Post text='I can better' like="9" />
                <Post text='Belive me' like="0" />
            </div>
        </div>
    );
}

export default ProfileContent;