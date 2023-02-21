import React from 'react';
import styles from './SideNavBar.module.css';
import {lowerArray, upperArray} from './arrays'
import UpperElement from '../SideNavbarElement/UpperElement';
import LowerElement from '../SideNavbarElement/LowerElement';

const SideNavBar = ({ show, switchTheme, switchLanguage }) => {
    return (
        <div className={styles.sideNavBar}>
            <div className={styles.upperElements}>
            {upperArray.map((navElement) => (
                <UpperElement
                    key={navElement.id}
                    icon={navElement.icon}
                    text={navElement.text}
                    show={show}
                    link={navElement.link}
                />
            ))}
            </div>
            <div className={styles.lowerElements}>
                {lowerArray.map((navElement) => (
                    <LowerElement
                        key={navElement.id}
                        icon={navElement.icon}
                        text={navElement.text}
                        show={show}
                        switchTheme={switchTheme}
                        switchLang={switchLanguage}
                        func={navElement.func}
                    />
                ))}
            </div>
        </div>
    );
};

export default SideNavBar;
