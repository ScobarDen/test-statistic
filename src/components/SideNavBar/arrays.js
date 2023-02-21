import {
    faCircleHalfStroke,
    faCircleInfo,
    faHandshakeAngle,
    faLanguage,
    faNewspaper,
    faTrophy,
} from '@fortawesome/free-solid-svg-icons';
export const lowerArray = [
    {
        id: 1,
        text: 'Тема',
        icon: faCircleHalfStroke,
        func: 'theme'
    },
    {
        id: 2,
        text: 'Язык',
        icon: faLanguage,
        func: 'lang'
    },
]
export const upperArray = [
    {
        id: 1,
        text: 'Соревнования',
        icon: faTrophy,
        link: '/competitions'
    },
    {
        id: 2,
        text: 'Статьи',
        icon: faNewspaper,
        link: 'articles'
    },
    {
        id:3,
        text: 'FAQ',
        icon: faCircleInfo,
        link: 'faq'
    },
    {
        id: 4,
        text: 'Поддержка',
        icon: faHandshakeAngle,
        link: 'support'
    },
];