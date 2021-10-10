import React from 'react';
import CloneMessage from '../CloneMessage/CloneMessage';
import styles from './messageList.module.css';

const SashaChat = () => {
    return (
        <div>
            <CloneMessage peopleName='Me' messageContent='Hi. Who are you?' imgAdress='https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo' />
            <CloneMessage peopleName='Me' messageContent='HEY!!!' imgAdress='https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo' />
            <CloneMessage peopleName='Me' messageContent='Dont ignore me!' imgAdress='https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo' />
            <CloneMessage peopleName='Me' messageContent='I can delete you!' imgAdress='https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo' />
            <CloneMessage peopleName='Sasha' messageContent='Oh no......' imgAdress='https://banner2.cleanpng.com/20180622/jpz/kisspng-circle-logo-clip-art-kero-5b2ce282e43848.1651177015296682269348.jpg' />
            <CloneMessage peopleName='Sasha' messageContent='Dont kill me &#128560;' imgAdress='https://banner2.cleanpng.com/20180622/jpz/kisspng-circle-logo-clip-art-kero-5b2ce282e43848.1651177015296682269348.jpg' />
            <CloneMessage peopleName='Admin' messageContent='Sasha has been killed' imgAdress='https://miro.medium.com/max/2400/2*ErHzItrSYBAPV8YjaNY7Mg.jpeg' />
        </div>
    );
}

export default SashaChat;