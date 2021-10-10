import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsList from './DialogsList/DialogsList';
import VictorChat from './MessageList/ChatWithVictor/ChatWithVictor';
import AndrewChat from './MessageList/ChatWithAndrew/ChatWithAndrew';
import styles from './messages.module.css';
import SashaChat from './MessageList/ChatWithSasha/ChatWithSasha';
import DmitryChat from './MessageList/ChatWithDmitry/ChatWithDmitry';
import SvetaChat from './MessageList/ChatWithSveta/ChatWithSveta';
import ValeraChat from './MessageList/ChatWithValera/ChatWithSveta';

const MessagesContent = () => {
    return (
        <BrowserRouter>
        <div className={styles.messagesContent}>
            <div><DialogsList/></div>
            <div className={styles.greenLine}></div>
            <div>
                <Route path='/Messages/Andrew' component={AndrewChat} />
                <Route path='/Messages/Dmitry' component={DmitryChat} />
                <Route path='/Messages/Sasha' component={SashaChat} />
                <Route path='/Messages/Sveta' component={SvetaChat} />
                <Route path='/Messages/Valera' component={ValeraChat} />
                <Route path='/Messages/Victor' component={VictorChat} />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default MessagesContent;