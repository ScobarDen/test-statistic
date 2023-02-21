import React, { useEffect, useRef } from 'react';
import UpperElement from '../../SideNavbarElement/UpperElement';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './User.module.css';
const User = ({ login, user }) => {
    let profileLink = '/auth';
    if (login) {
        profileLink = '/profile';
    }

    const clientWidth = useRef(window.innerWidth);
    useEffect(() => {
        clientWidth.current = window.innerWidth;
    }, [window.innerWidth]);
    const display = clientWidth.current > 600 ? 'box' : 'none';
    const style = {
        icon: {
            backgroundImage: `url(${user.profilePhoto})`,
        },
        wrap: {
            display: display,
        },
    };

    return (
        <div style={style.wrap} className={styles.userData}>
            <h2 className={styles.username}>{user.name}</h2>
            {user.profilePhoto ? (
                <div className={styles.profilePhoto} style={style.icon}></div>
            ) : (
                <UpperElement text={'Профиль'} icon={faUser} link={profileLink} />
            )}
        </div>
    );
};

export default User;
