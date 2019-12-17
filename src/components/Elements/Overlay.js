import React from 'react';
import styles from './overlay.module.scss';

const Overlay = props => {
    return (
        <div className={styles.Overlay}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Overlay;