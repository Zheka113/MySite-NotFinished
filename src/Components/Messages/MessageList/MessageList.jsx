import React from 'react';
import CloneMessage from './CloneMessage/CloneMessage';
import messageList from './messageList.module.css';

const MessageList = () => {
    return (
        <div>
            <CloneMessage peopleName='nnn' messageContent='ggg' />
        </div>
    );
}

export default MessageList;