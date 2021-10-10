import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navBar.module.css';

const NavBarContent = () => {
    return (
        <nav className={styles.navBarContent}>
            <ul>
                <li>
                    <NavLink to="/Profile" activeClassName={styles.activeLink}>
                        <h3>
                            Profile
                        </h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Messages" activeClassName={styles.activeLink}>
                        <h3>
                            Messeges
                        </h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/News" activeClassName={styles.activeLink}>
                        <h3>
                            News
                        </h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Music" activeClassName={styles.activeLink}>
                        <h3>
                            Music
                        </h3>
                    </NavLink>
                </li>
                <br />
                <li>
                    <NavLink to="/Settings" activeClassName={styles.activeLink}>
                        <h3>
                            Settings
                        </h3>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBarContent;