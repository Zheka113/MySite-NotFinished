import React from 'react';
import CloneMessage from '../CloneMessage/CloneMessage';
import styles from './messageList.module.css';

const SvetaChat = ({SvetaChatData}) => {

    let messages = SvetaChatData.map(m=><CloneMessage peopleName={m.peopleName} messageContent={m.messageContent} imgAdress={m.imgAdress} />)

    return (
        <div>
            {messages}
        </div>
    );
}

export default SvetaChat;