import React from 'react';
import navBarStyles from './navBar.module.css';

const NavBarContent = () => {
    return (
        <nav className={navBarStyles.navBarContent}>
            <ul>
                <li>
                    <a href="/Profile">
                        <h3>
                            Profile
                        </h3>
                    </a>
                </li>
                <li>
                    <a href="/Messages">
                        <h3>
                            Messeges
                        </h3>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h3>
                            News
                        </h3>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h3>
                            Music
                        </h3>
                    </a>
                </li>
                <br />
                <li>
                    <a href="#">
                        <h3>
                            Settings
                        </h3>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBarContent;