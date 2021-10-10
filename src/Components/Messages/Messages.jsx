import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsList from './DialogsList/DialogsList';
import VictorChat from './MessageList/ChatWithVictor/ChatWithVictor';
import AndrewChat from './MessageList/ChatWithAndrew/ChatWithAndrew';
import styles from './messages.module.css';

const MessagesContent = () => {
    return (
        <BrowserRouter>
        <div className={styles.messagesContent}>
            <div><DialogsList/></div>
            <div className={styles.greenLine}></div>
            <div>
                <Route path='/Messages/Andrew' component={AndrewChat} />
                <Route path='/Messages/Victor' component={VictorChat} />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default MessagesContent;