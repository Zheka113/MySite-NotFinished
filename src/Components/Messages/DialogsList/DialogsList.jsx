import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './dialogsList.module.css';

const DialogsList = () => {
    return (
        <div className={style.dialogsList}>
            <h2>
                DialogsList
            </h2>
            <ul>
                <li>
                    <NavLink to='/Messages/Andrew' activeClassName={style.activeLink} >
                        Andrew
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Messages/Dmitry' activeClassName={style.activeLink} >
                        Dmitry
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Messages/Sasha' activeClassName={style.activeLink} >
                        Sasha
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Messages/Sveta' activeClassName={style.activeLink} >
                        Sveta
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Messages/Valera' activeClassName={style.activeLink} >
                        Valera
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Messages/Victor' activeClassName={style.activeLink} >
                        <h3>
                            Victor
                        </h3>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default DialogsList;