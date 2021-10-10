import React from 'react';
import dialogsListStyle from './dialogsList.module.css';

const DialogsList = () => {
    return (
        <div className={dialogsListStyle.dialogsList}>
            <h2>
                DialogsList
            </h2>
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
                        <h3>
                            Victor
                        </h3>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default DialogsList;