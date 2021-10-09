import React from 'react';
import DialogsList from './DialogsList/DialogsList';
import MessageList from './MessageList/MessageList';
import messagesStyle from './messages.module.css';

const MessagesContent = () => {
    return (
        <div className={messagesStyle.messagesContent}>
            <div><DialogsList/></div>
            <div className={messagesStyle.greenLine}></div>
            <div><MessageList /></div>
        </div>
    );
}

export default MessagesContent;