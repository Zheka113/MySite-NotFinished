import React from 'react';
import CloneMessage from './MessageList/CloneMessage/CloneMessage'
/* import styles from './messageList.module.css'; */

const Chat = ({data}) => {

    let messages = data?.map(message=><CloneMessage peopleName={message.peopleName} messageContent={message.messageContent} imgAdress={message.imgAdress} />);
    
    return (
        <div>
            {messages}
        </div>
    );
}

export default Chat;