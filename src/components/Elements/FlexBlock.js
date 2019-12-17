import React from 'react';
import styles from './flexblock.module.scss';

const FlexBlock = props => {
    const { children } = props;
    return (
        <div className={styles.FlexBox}>
            {children}
        </div>
    )
}

export default FlexBlock;