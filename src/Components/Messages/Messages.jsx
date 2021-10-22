import React from 'react';
import styles from './messages.module.css';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsList from './DialogsList/DialogsList';
import VictorChat from './MessageList/ChatWithVictor/ChatWithVictor';
import AndrewChat from './MessageList/ChatWithAndrew/ChatWithAndrew';
import SashaChat from './MessageList/ChatWithSasha/ChatWithSasha';
import DmitryChat from './MessageList/ChatWithDmitry/ChatWithDmitry';
import SvetaChat from './MessageList/ChatWithSveta/ChatWithSveta';
import ValeraChat from './MessageList/ChatWithValera/ChatWithSveta';

const MessagesContent = ({messagesData}) => {
    return (
        <BrowserRouter>
        <div className={styles.messagesContent}>
            <div><DialogsList/></div>
            <div className={styles.greenLine}></div>
            <div>
                <Route path='/Messages/Andrew' render={()=><AndrewChat AndrewChatData={messagesData.AndrewChatData} />} />
                <Route path='/Messages/Dmitry' render={()=><DmitryChat DmitryChatData={messagesData.DmitryChatData} />} />
                <Route path='/Messages/Sasha' render={()=><SashaChat SashaChatData={messagesData.SashaChatData} />} />
                <Route path='/Messages/Sveta' render={()=><SvetaChat SvetaChatData={messagesData.SvetaChatData} />} />
                <Route path='/Messages/Valera' render={()=><ValeraChat ValeraChatData={messagesData.ValeraChatData} />} />
                <Route path='/Messages/Victor' render={()=><VictorChat VictorChatData={messagesData.VictorChatData} />} />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default MessagesContent;