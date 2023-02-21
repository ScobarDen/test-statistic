import React, { useEffect, useRef } from 'react';
import styles from './UpperElement.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useNavigate} from 'react-router-dom';

const UpperElement = ({ text, icon, show, link,}) => {
    const clientWidth = useRef(window.innerWidth);
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(link)
    }
    useEffect(() => {
        clientWidth.current = window.innerWidth;
    }, [window.innerWidth]);
    const sideWidth = clientWidth.current > 600 ? '11rem' : '100vw';
    let classNameWrap = styles.wrapSide
    const style = {
       "sideText": {
           width: !show ? 0 : sideWidth,
       },
        "Icon" : {
            fontSize: '1.2rem',
        },
        "wrap":{
            transition:' color 0.2s ease-in-out, background-color 0.2s ease-in-out',
        }
    };
    if (text === 'Профиль') {
        style.Icon.fontSize = '1.2rem'
        classNameWrap = styles.wrapTop
    }

    return (
        <a onClick={handleClick} style={style.wrap}  className={classNameWrap}>
            <div className={styles.iconContainer}>
                <FontAwesomeIcon style={style.Icon}  icon={icon} />
            </div>
            <h3 className={styles.sideText} style={style.sideText}>
                {text}
            </h3>
        </a>
    );
};

export default UpperElement;
