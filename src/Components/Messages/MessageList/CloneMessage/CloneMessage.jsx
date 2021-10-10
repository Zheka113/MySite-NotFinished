import React from 'react';
import cloneMessageStyle from './cloneMessage.module.css';

const CloneMessage = ({ peopleName, messageContent, imgAdress }) => {
    return (
        <div className={cloneMessageStyle.CloneMessage}>
            <img src={imgAdress} />
            <span>
                <h3>{peopleName}</h3>
                <div>
                    <h4>{messageContent}</h4>
                </div>
            </span>
        </div>
    );
}

export default CloneMessage;