import React from 'react';
import { Link } from 'gatsby';
import styles from './footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.Footer__Container}>
                <div className={styles.Footer__Col_left}>
                    <ul className={styles.Footer__Links}>
                        <li className={styles.Footer__List_Title}>Links</li>
                        <li className={styles.Footer__List_Item}>
                            <Link to="/about">About Me</Link>
                        </li>
                        <li className={styles.Footer__List_Item}>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li className={styles.Footer__List_Item}>
                            <Link to="/request-cv">CV</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.Footer__Col_Center}>
                    <ul className={styles.Footer__Links}>
                        <li className={styles.Footer__List_Title}>Social Links</li>
                        <li className={styles.Footer__Links}>
                            <a href="https://github.com/LeighS95" target="_blank" rel="noopener noreferrer">Github</a>
                        </li>
                        <li className={styles.Footer__Links}>
                            <a href="https://www.linkedin.com/in/stephen-leigh-8a6519184/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                        </li>
                        <li className={styles.Footer__Links}>
                            <a href="https://codepen.io/SLeigh1995" target="_blank" rel="noopener noreferrer">Codepen</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.Footer__Col_Right}>
                    <ul className={styles.Footer__Links}>
                        <li className={styles.Footer__List_Title}>Contact</li>
                        <li className={styles.Footer__List_Item}>
                            <Link to="/contact">Send Message</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.Footer__copyright}>
                <p> Stephe Leigh &copy; 2019</p>
            </div>
        </div>
        
    )
}

export default Footer;