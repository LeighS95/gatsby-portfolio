import React, { Children } from 'react';
import PropsTypes from 'prop-types';
import styles from './button.module.scss';

const Button = props => {
    const { text, type, link, isLink } = props;
    
    if(isLink) {
        return (
            <button className={styles.Button}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {text}
                    {props.children}
                </a>
            </button>
        )
    } else {
        return (
            <button type={type} className={styles.Button}>
                {text}
                {props.children}
            </button>
        )
    }
}

Button.PropsTypes = {
    text: PropsTypes.string.isRequired,
    Link: PropsTypes.string,
    isLink: PropsTypes.bool
}

Button.default = {
    link: '',
    isLink: false
}

export default Button;