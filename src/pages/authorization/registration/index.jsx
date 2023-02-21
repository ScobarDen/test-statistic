import React from 'react';
import styles from '../authorization.module.css';
import { useForm } from 'react-hook-form';

const Registration = ({ handleChange }) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i;
    return (
        <div className={styles.wrap}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder={'Имя'}
                    className={styles.input}
                    {...register('firstname', {
                        required: 'Заполните, пожалуйста',
                        maxLength: { value: 20, message: 'Максимум 20 символов' },
                    })}
                />
                <div className="error">{}</div>
                <input
                    placeholder={'Фамилия'}
                    className={styles.input}
                    {...register('lastname', {
                        required: 'Заполните, пожалуйста',
                        maxLength: { value: 20, message: 'Максимум 20 символов' },
                    })}
                />
                <div className="error">{}</div>
                <input
                    placeholder={'Почта'}
                    className={styles.input}
                    {...register('email', { required: 'Заполните, пожалуйста' })}
                />
                <div className="error">{}</div>
                <input
                    placeholder={'Логин'}
                    className={styles.input}
                    {...register('login', {
                        required: 'Заполните, пожалуйста',
                        maxLength: { value: 20, message: 'Максимум 12 символов' },
                    })}
                />
                <div className="error">{}</div>
                <input
                    placeholder={'Пароль'}
                    className={styles.input}
                    type={'password'}
                    {...register('password', {
                        required: 'Заполните, пожалуйста',
                        pattern: {
                            value: passwordValidation,
                            message:
                                'Пароль должен соответствовать требованиям:\n *Минимум 8 символов\n *Минимум 1 заглавная буква\n *Минимум 1 цифра\n *Только английские буквы',
                        },
                    })}
                />
                <div className="error">{}</div>
                <input className={styles.submit} type={'submit'} />
                <h2 className={styles.changerText}>
                    Уже есть аккаунт?{' '}
                    <a onClick={handleChange} className={styles.changer}>
                        Войти
                    </a>
                </h2>
            </form>
        </div>
    );
};

export default Registration;
