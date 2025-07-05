import React from 'react';
import { Link } from 'react-router-dom';
import style from './dialogsList.module.css';

const DialogsList = (dialogsData) => {
    debugger;
    const dialogsDataArr = dialogsData?.map((dialogName, i) => <li key={i}>
            <Link to={`/Messages/` + dialogName} activeClassName={style.activeLink} >
                {dialogName}
            </Link>
        </li>)
    return (
        <div className={style.dialogsList}>
            <h2>
                DialogsList
            </h2>
            <ul>
            {dialogsDataArr}
            </ul>
        </div>
    );
}

export default DialogsList;