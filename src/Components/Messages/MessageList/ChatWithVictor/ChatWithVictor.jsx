import React from 'react';
import CloneMessage from '../CloneMessage/CloneMessage';
import styles from './messageList.module.css';

const VictorChat = ({VictorChatData}) => {

    let messages = VictorChatData.map(m=> <CloneMessage peopleName={m.peopleName} messageContent={m.messageContent} imgAdress={m.imgAdress} />)

    return (
        <div>
            {messages}
        </div>
    );
}

export default VictorChat;