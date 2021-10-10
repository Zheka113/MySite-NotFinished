import React from 'react';
import CloneMessage from '../CloneMessage/CloneMessage';
import styles from './messageList.module.css';

const DmitryChat = () => {
    return (
        <div>
            <CloneMessage peopleName='Dmitry' messageContent='Hello! I think that you can give me smiles)))' imgAdress='https://w1.pngwing.com/pngs/472/609/png-transparent-graphic-design-icon-logo-circle-annulus-geometric-shape-plane-icon-design-point.png' />
            <CloneMessage peopleName='Me' messageContent='Hi. What i taka from you?' imgAdress='https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo' />
            <CloneMessage peopleName='Dmitry' messageContent='Thanks?)' imgAdress='https://w1.pngwing.com/pngs/472/609/png-transparent-graphic-design-icon-logo-circle-annulus-geometric-shape-plane-icon-design-point.png' />
            <CloneMessage peopleName='Me' messageContent='...' imgAdress='https://yt3.ggpht.com/a/AATXAJz6LsMAjJz-rXca0JGr5gtzDxoC9c2yQAmlqGrv0w=s900-c-k-c0xffffffff-no-rj-mo' />
            <CloneMessage peopleName='Dmitry' messageContent='&#128561; &#128576; &#8505; &#128151; &#128071;' imgAdress='https://w1.pngwing.com/pngs/472/609/png-transparent-graphic-design-icon-logo-circle-annulus-geometric-shape-plane-icon-design-point.png' />
        </div>
    );
}

export default DmitryChat;