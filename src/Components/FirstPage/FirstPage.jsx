import React from 'react';
import styles from './firstPage.module.css';

const FirstPage = () => {
    return (
        <div className={styles.firstPage}>
            <img src="https://itechart-by.s3.amazonaws.com/storage/media/images/1200px-React-icon.svg.original.png" className={styles.logo}/>
        </div>
    );
}

export default FirstPage;