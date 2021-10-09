import React from 'react';
import dialogsListStyle from './dialogsList.module.css';

const DialogsList = () => {
    return (
        <div className={dialogsListStyle.dialogsList}>
            <h3>
                DialogsList
            </h3>
            <ul>
                <li>
                    <a href="#">
                        Andrew
                    </a>
                </li>
                <li>
                    <a href="#">
                        Dmitry
                    </a>
                </li>
                <li>
                    <a href="#">
                        Sasha
                    </a>
                </li>
                <li>
                    <a href="#">
                        Sveta
                    </a>
                </li>
                <li>
                    <a href="#">
                        Valera
                    </a>
                </li>
                <li>
                    <a href="#">
                        Victor
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default DialogsList;