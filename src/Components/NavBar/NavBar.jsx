import React from 'react';
import navBarStyles from './navBar.module.css';

const NavBarContent = () => {
    return (
        <nav className={navBarStyles.navBarContent}>
            <ul>
                <li>
                Profile
                </li>
                <li>
                Messages
                </li>
                <li>
                News
                </li>
                <li>
                Music
                </li>
                <br/>
                <li>
                Settings
                </li>
            </ul>
        </nav>
    );
}

export default NavBarContent;