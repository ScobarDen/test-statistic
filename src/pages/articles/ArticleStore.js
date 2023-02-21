import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';


const useArticles = create()(immer((set)=>({
    articles: [
        {id:1, userId:1,  text:'piwugytfgh,jliuyitrdrxfmbjliuytdrxmfhbj/yftdrsdzmvhtdrd  efhehfjwe enb fjewbgfwjfvwjg vefvwe fjwefgwhe gwwb hvfehv hfh v vhj vjfwejfg wfhv  ', title:'jefhieo', postDate:'1/03/2022'},
        {id:2, userId:2, text:'piwugytfgh,jliuyitrdrxfmbjliuytdrxmfhbj/yftdrsdzmvhtdrd  efhehfjwe enb fjewbgfwjfvwjg vefvwe fjwefgwhe gwwb hvfehv hfh v vhj vjfwejfg wfhv  ', title:'js', postDate:'9/04/2022'},
        {id:3, userId:3, text:'piwugytfgh,jliuyitrdrxfmbjliuytdrxmfhbj/yftdrsdzmvhtdrd  efhehfjwe enb fjewbgfwjfvwjg vefvwe fjwefgwhe gwwb hvfehv hfh v vhj vjfwejfg wfhv  ', title:'python', postDate:'5/07/2022'},
        {id:3, userId:3, text:'piwugytfgh,jliuyitrdrxfmbjliuytdrxmfhbj/yftdrsdzmvhtdrd  efhehfjwe enb fjewbgfwjfvwjg vefvwe fjwefgwhe gwwb hvfehv hfh v vhj vjfwejfg wfhv  ', title:'python', postDate:'5/07/2022'},
        {id:3, userId:3, text:'piwugytfgh,jliuyitrdrxfmbjliuytdrxmfhbj/yftdrsdzmvhtdrd  efhehfjwe enb fjewbgfwjfvwjg vefvwe fjwefgwhe gwwb hvfehv hfh v vhj vjfwejfg wfhv  ', title:'python', postDate:'5/07/2022'},
        {id:3, userId:3, text:'piwugytfgh,jliuyitrdrxfmbjliuytdrxmfhbj/yftdrsdzmvhtdrd  efhehfjwe enb fjewbgfwjfvwjg vefvwe fjwefgwhe gwwb hvfehv hfh v vhj vjfwejfg wfhv  ', title:'python', postDate:'5/07/2022'},
        {id:3, userId:3, text:'piwugytfgh,jliuyitrdrxfmbjliuytdrxmfhbj/yftdrsdzmvhtdrd  efhehfjwe enb fjewbgfwjfvwjg vefvwe fjwefgwhe gwwb hvfehv hfh v vhj vjfwejfg wfhv  ', title:'python', postDate:'5/07/2022'},
    ],
    createArticle: (user, articleData)=>{
        set((state)=>({
            ...state,
            articles: [...state.articles, {
                id:state.articles[state.articles.length].id + 1,
                userId:user.id,
                text: articleData.text,
                title:articleData.text,
                postDate: new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"}).split(', ')[0]
            }]
        }))
    },
    removeArticle: (id) => {
        set((state)=>({
            ...state,
            articles: state.articles.filter((el)=>el.id !== id)
        }))
    },
})))
export default useArticles