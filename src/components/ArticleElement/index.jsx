import React from 'react';
import styles from './ArticleElement.module.css'
import {useNavigate} from 'react-router-dom';

const ArticleElement = ({el}) => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate(`${el.id}`)
    }
    const users = [
        {userId:1, name:'Falkomer', profilePhoto: 'https://w7.pngwing.com/pngs/656/941/png-transparent-emoticon-smiley-facial-expression-black-and-white-cool-miscellaneous-text-photography.png'},
        {userId:2, name:'wdwkdkw', profilePhoto:'https://e7.pngegg.com/pngimages/809/212/png-clipart-black-white-emoticon-smiley-computer-icons-emoji-black-and-white-cdr-face-thumbnail.png'},
        {userId:3, name: 'fjefdwkdw', profilePhoto:'https://w7.pngwing.com/pngs/117/617/png-transparent-emoji-emoticon-smiley-emoji-black-and-white-white-face-smiley.png'},
    ]
    const user = {}
    users.map((element)=>{
        if (element.userId === el.userId) {
            user.name = element.name
            user.profilePhoto = element.profilePhoto
        }
    })
    return (
        <div className={styles.wrap}>
            <div className={styles.userData}>
                <img src={user.profilePhoto} className={styles.profilePhoto} alt="userPhoto"/>
                <h4 className={styles.name}>{user.name}</h4>
            </div>
            <h3 className={styles.title}>{el.title}</h3>
            <p>{el.text}</p>
            <button onClick={e=>handleClick()} className={styles.button}>Читать дальше:</button>
        </div>
    );
};

export default ArticleElement;
