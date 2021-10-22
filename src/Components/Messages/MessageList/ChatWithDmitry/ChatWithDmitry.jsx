import React from 'react';
import CloneMessage from '../CloneMessage/CloneMessage';
import styles from './messageList.module.css';

const DmitryChat = ({DmitryChatData}) => {

    let messages = DmitryChatData.map(m=><CloneMessage peopleName={m.peopleName} messageContent={m.messageContent} imgAdress={m.imgAdress}/>);

    return (
        <div>
            {messages}
        </div>
    );
}

export default DmitryChat;