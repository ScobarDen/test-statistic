import React, { useRef } from 'react';
import styles from './Navbar.module.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import User from './User/User';
import { companyLogoPng } from '../../App';

const Navbar = ({ login, show, userData, handleClickSide }) => {
    const width = useRef(window.innerWidth);
    const navigate = useNavigate();
    const handleClickAuth = () => {
        navigate('/auth');
    };
    const handleClickHome = () => {
        navigate('/');
    };
    const iconRef = useRef(null);
    const handleClickBurger = () => {
        handleClickSide();
        iconRef.current.classList.toggle(styles.rotate);
    };
    return (
        <div className={styles.topNavbar}>
            <div className={styles.navbarItem}>
                <div className={styles.logoWrap} onClick={handleClickHome}>
                    <img className={styles.logo} src={`${companyLogoPng}`} alt="logo" />
                    {width < 600 ? (
                        !show ? (
                            <h1 className={styles.textTopNavbar}>Statistics.online</h1>
                        ) : login ? (
                            <></>
                        ) : (
                            <button onClick={handleClickAuth} className={styles.authNavbar}>
                                Войти
                            </button>
                        )
                    ) : (
                        <h1 className={styles.textTopNavbar}>Statistics.online</h1>
                    )}
                </div>
                <button ref={iconRef} className={styles.switchNavbar} onClick={handleClickBurger}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            <div className={styles.navbarItem}>
                {login ? (
                    <User login={login} user={userData} />
                ) : (
                    <button onClick={handleClickAuth} className={styles.authNavbar}>
                        Войти
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
