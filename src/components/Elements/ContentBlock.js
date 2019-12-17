import React from 'react';
import styles from './contentblock.module.scss';

const ContentBlock = props => {
    const { children } = props;
    return (
        <div className={styles.Content__Block}>
            {children}
        </div>
    )
}

export default ContentBlock;