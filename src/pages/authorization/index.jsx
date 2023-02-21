import React, { useEffect, useState } from 'react';
import Registration from './registration';
import { useNavigate } from 'react-router-dom';
import Login from './login';
const Authorization = ({ login }) => {
    const [state, setState] = useState(false); // false - register, true - login
    const navigate = useNavigate();
    const handleRender = () => {
        navigate('/profile');
    };
    useEffect(() => {
        if (login) {
            handleRender();
        }
    }, []);
    const handleChangeState = () => {
        setState(!state);
    };
    return (
        <>
            {state ? (
                <Registration handleChange={handleChangeState} />
            ) : (
                <Login handleChange={handleChangeState} />
            )}
        </>
    );
};

export default Authorization;
