import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Authorization from './pages/authorization';
import styles from './App.module.css';
import Navbar from './components/Navbar';
import SideNavBar from './components/SideNavBar';
import {useState} from 'react';
import useLocalStorage from 'use-local-storage';
import Articles from './pages/articles';
import UserStore from './UserStore';
import useArticles from './pages/articles/ArticleStore';
import ArticlePage from './components/ArticlePage';
export const companyLogoPng = ''
function App() {
    const store = useArticles()
    const {userData} = UserStore()
    console.log(userData);
    const [login, setLogin] = useState(userData.name ? true : false);
    console.log(login);
    const [show, setShow] = useState(false);
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const [lang, setLang] = useState(true) // true = russian, false - english
    const handleClickSide = () => {
        setShow(!show);
    };

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };
    const switchLanguage = () => {
        setLang(!lang)
        console.log('language changed');
    }
    return (
        <div data-theme={theme} className={styles.app}>
            <Navbar {...{ login,userData,show, handleClickSide}} />
            <div className={styles.wrapper}>
                <SideNavBar login={login} show={show} switchLanguage={switchLanguage} switchTheme={ switchTheme } />
                <div className={styles.main}>
                    <Routes>
                        {store.articles.map((el)=>{
                            return <Route key={el.id} path={`articles/${el.id}`} element={<ArticlePage el={el}/>}/>
                        })}
                        <Route path={'/'} element={ <Home/> }/>
                        <Route path={'/auth'} element={ <Authorization /> }/>
                        <Route path={'/articles'} element={ <Articles/> }/>
                        <Route path={'/competitions'} element={ <Home/> }/>
                        <Route path={'/profile'} element={ <Home/> }/>
                        <Route path={'/support'} element={ <Home/> }/>
                        <Route path={'/team'} element={ <Home/> }/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;