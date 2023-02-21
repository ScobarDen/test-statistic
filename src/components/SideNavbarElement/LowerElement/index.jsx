import React, { useEffect, useRef } from 'react';
import styles from './LowerElement.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LowerElement = ({ text, icon, show, switchTheme, switchLang, func}) => {
    const clientWidth = useRef(window.innerWidth);
    useEffect(() => {
        clientWidth.current = window.innerWidth;
    }, [window.innerWidth]);
    const sideWidth = clientWidth.current > 600 ? '11rem' : '100vw';
    const style = {
        width: !show ? 0 : sideWidth,
    };

    return (
        <a onClick={func === 'lang' ? switchLang : switchTheme} className={styles.wrapSide}>
            <div className={styles.iconContainer}>
                <FontAwesomeIcon className={styles.icon} icon={icon} />
            </div>
            <h2 className={styles.sideText} style={style}>
                {text}
            </h2>
        </a>
    );
};

export default LowerElement;
