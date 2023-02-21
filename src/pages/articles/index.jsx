import React from 'react';
import styles from './articles.module.css'
import useArticles from './ArticleStore';
import ArticleElement from '../../components/ArticleElement';

const Articles = () => {
    const store = useArticles()
    console.log(store);
    return (
        <div className={styles.wrapper}>
            <ul className={styles.ul}>
                {store.articles.map(el=><li key={el.id}><ArticleElement el={el}/></li>)}
            </ul>
        </div>
    );
};

export default Articles;
