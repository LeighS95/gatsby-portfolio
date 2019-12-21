import React from 'react';
import { Link } from 'gatsby';
import styles from './card.module.scss';

const Card = props => {
    const {image, title, text, projectUrl, gitUrl, info } = props;

    return (
        <div className={styles.Card}>
            <div className={styles.Card__Img}>
                <img src={image} alt={title}/>
            </div>
            <div className={styles.Card__Content}>
                <h3 className={styles.Card__Content_Title}>{title}</h3>
                <p className={styles.Card__Content_Text}>{text}
                {info ? (
                    <Link to={info.slug}> Read More</Link>
                ): null}
                </p>
                {projectUrl !== '' ? (
                    <div className={styles.Buttons}>
                        <a href={projectUrl} target="_blank">View Project</a>
                        <a href={gitUrl} target="_blank">View Github</a>
                    </div>
                ) : (
                    <div className={styles.Buttons__Center}>
                        <a href={gitUrl} target="_blank">View Github</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card;