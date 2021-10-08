import React from 'react';
import ProfileStatusStyle from './profileStatus.module.css';

const ProfileStatus = () => {
    return (
        <div className={ProfileStatusStyle.ProfileStatus}>
            <img src='https://phonoteka.org/uploads/posts/2021-04/1619063961_2-phonoteka_org-p-dlinnie-kartinki-dlya-fona-2.jpg' className={ProfileStatusStyle.MainImage} />
            <img src='https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo' className={ProfileStatusStyle.LogoImage}  />
            <div>
                <h2>Evgeniy S.</h2>
                Date of Birth: 29 of November
                <br/>
                City: Baranovichy
                <br/>
                Education: Magistracy
                <br/>
                Web Site (VK): <a href="https://vk.com/id232757194">https://vk.com/id232757194</a>
            </div>
        </div>
    );
}

export default ProfileStatus;