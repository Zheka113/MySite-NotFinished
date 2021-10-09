import React from 'react';
import navBarStyles from './navBar.module.css';

const NavBarContent = () => {
    return (
        <nav className={navBarStyles.navBarContent}>
            <ul>
                <li>
                    <a href="/Profile">
                        Profile 
                    </a>
               </li>
               <li>
                    <a href="/Messages">
                        Messeges 
                    </a>
               </li>
               <li>
                    <a href="#">
                        News 
                    </a>
               </li>
               <li>
                    <a href="#">
                        Music 
                    </a>
               </li>
               <br/>
               <li>
                    <a href="#">
                        Settings 
                    </a>
               </li>
            </ul>
        </nav>
    );
}

export default NavBarContent;