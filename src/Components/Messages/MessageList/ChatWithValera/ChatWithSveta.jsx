import React from 'react';
import CloneMessage from '../CloneMessage/CloneMessage';
import styles from './messageList.module.css';

const ValeraChat = ({ValeraChatData}) => {

    let messages = ValeraChatData.map(m=><CloneMessage peopleName={m.peopleName} messageContent={m.messageContent} imgAdress={m.imgAdress} />)

    return (
        <div>
            {messages}
        </div>
    );
}

export default ValeraChat;