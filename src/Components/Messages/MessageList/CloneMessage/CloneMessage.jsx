import React from 'react';
import cloneMessageStyle from './cloneMessage.module.css';

const CloneMessage = ({peopleName,messageContent}) => {
    return (
        <div className={cloneMessageStyle.CloneMessage}>
            {peopleName}
            <div>
                {messageContent}
            </div>
        </div>
    );
}

export default CloneMessage;