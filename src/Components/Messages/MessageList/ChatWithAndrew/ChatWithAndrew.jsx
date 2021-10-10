import React from 'react';
import CloneMessage from '../CloneMessage/CloneMessage';
import styles from './messageList.module.css';

const AndrewChat = () => {
    return (
        <div>
            <CloneMessage peopleName='Andrew' messageContent='Hello!' imgAdress='https://aiconica.net/previews/odnoklassniki-logo-circle-filled-icon-826.png' />
            <CloneMessage peopleName='Me' messageContent='Hi. Where are your from?' imgAdress='https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo' />
            <CloneMessage peopleName='Andrew' messageContent="I'm from your code))" imgAdress='https://aiconica.net/previews/odnoklassniki-logo-circle-filled-icon-826.png' />
            <CloneMessage peopleName='Me' messageContent='Bot...' imgAdress='https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo' />
            <CloneMessage peopleName='Andrew' messageContent='&#128557;' imgAdress='https://aiconica.net/previews/odnoklassniki-logo-circle-filled-icon-826.png' />
        </div>
    );
}

export default AndrewChat;