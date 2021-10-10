import React from 'react';
import CloneMessage from '../CloneMessage/CloneMessage';
import styles from './messageList.module.css';

const SvetaChat = () => {
    return (
        <div>
            <CloneMessage peopleName='Me' messageContent='Hello' imgAdress='https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo' />
            <CloneMessage peopleName='Sveta' messageContent='Hello' imgAdress='https://w0.pngwave.com/png/283/254/logo-circle-point-font-circle-png-clip-art.png' />
            <CloneMessage peopleName='Me' messageContent='Googbye' imgAdress='https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo' />
            <CloneMessage peopleName='Sveta' messageContent='Googbye' imgAdress='https://w0.pngwave.com/png/283/254/logo-circle-point-font-circle-png-clip-art.png' />
        </div>
    );
}

export default SvetaChat;