import React from 'react';
import CloneMessage from './CloneMessage/CloneMessage';
import messageListStyle from './messageList.module.css';

const MessageList = () => {
    return (
        <div>
            <CloneMessage peopleName='Victor' messageContent='You have mistakes' imgAdress='https://ae01.alicdn.com/kf/HTB1hoAgHHGYBuNjy0Foq6AiBFXaz/Nirvana.jpg' />
            <CloneMessage peopleName='Me' messageContent='Where?' imgAdress='https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo' />
            <CloneMessage peopleName='Victor' messageContent='Anywhere' imgAdress='https://ae01.alicdn.com/kf/HTB1hoAgHHGYBuNjy0Foq6AiBFXaz/Nirvana.jpg' />
            <CloneMessage peopleName='Me' messageContent=':(' imgAdress='https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo' />
            <CloneMessage peopleName='Admin' messageContent='This is a joke))' imgAdress='https://miro.medium.com/max/2400/2*ErHzItrSYBAPV8YjaNY7Mg.jpeg' />
        </div>
    );
}

export default MessageList;