import React from 'react';
import NavBarStyles from './navBar.module.css';

const NavBarContent = () => {
    return (
        <nav className={NavBarStyles.NavBarContent}>
            <div>
                Profile
            </div>
            <div>
                Messages
                </div>
            <div>
                News
            </div>
            <div>
                Music
            </div>
            <br/>
            <div>
                Settings
            </div>
        </nav>
    );
}

export default NavBarContent;