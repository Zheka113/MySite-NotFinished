import React from 'react';
import CloneMessage from '../CloneMessage/CloneMessage';
import styles from './messageList.module.css';

const AndrewChat = ({AndrewChatData}) => {

    let messages = AndrewChatData.map(m=><CloneMessage peopleName={m.peopleName} messageContent={m.messageContent} imgAdress={m.imgAdress} />);
    
    return (
        <div>
            {messages}
            <h1></h1>
        </div>
    );
}

export default AndrewChat;