import React from 'react';
import styles from './messages.module.css';
import { Route } from 'react-router-dom';
import Chat from './Chat'
import DialogsList from './DialogsList/DialogsList';
import DefaultPage from './MessageList/Defoult/Defoult';

const MessagesContent = ({messagesData}, {dialogsData}) => {
    const messagesDataArr = messagesData?.map((el, i) => <div key = {i}>
            <Route path={`/Messages/${el.name}`} render={()=><Chat data={el.data} />} />
        </div>)
    return (
        <div className={styles.messagesContent}>
            <div><DialogsList dialogsData = {dialogsData}/></div>
            <div className={styles.greenLine}></div>
            <div>
                <Route exact path='/Messages/' element={<DefaultPage />} />
                {messagesDataArr}
            </div>
        </div>
    );
}

export default MessagesContent;