import React from 'react';
import CloneMessage from '../CloneMessage/CloneMessage';
import styles from './messageList.module.css';

const ValeraChat = () => {
    return (
        <div>
            <CloneMessage peopleName='Me' messageContent='Hello' imgAdress='https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo' />
            <CloneMessage peopleName='Valera' messageContent='Дарова, нафиг этот инглишь)' imgAdress='https://i.pinimg.com/originals/78/eb/4a/78eb4a5d75692d02cb6ecd0635462482.jpg' />
            <CloneMessage peopleName='Me' messageContent='Согласен. Трудный язык.' imgAdress='https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo' />
            <CloneMessage peopleName='Valera' messageContent='Как сам?' imgAdress='https://i.pinimg.com/originals/78/eb/4a/78eb4a5d75692d02cb6ecd0635462482.jpg' />
            <CloneMessage peopleName='Me' messageContent='Всё круто, когда пишешь на русском)' imgAdress='https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo' />
        </div>
    );
}

export default ValeraChat;