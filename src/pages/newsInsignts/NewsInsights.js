import React from 'react';
import './NewsInsights.css';
import {useTranslation} from 'react-i18next';
import Filter from '../../components/filter/Filter';
import Blog from '../../components/blog/Blog';

import image from '../../assets/images/Outlook.png'
import img from '../../assets/images/mask-group-44.png';
import sjoerd from '../../assets/images/sjoerd-blog.png';

function NewsInsights(){
    const {t} = useTranslation();

    const blogData = [
        {
            img: image,
            title: t("newsInsights.blog"),
            description: t('newsInsights.lorem'),
            date: t("newsInsights.date"),
            author: t("newsInsights.sjoerd"),
            authorImg: sjoerd
        },
        {
            img: "",
            title: t("newsInsights.blog"),
            description: t('newsInsights.lorem')
        },
        {
            type:"ebook",
            img: "",
            title: t("newsInsights.ebook"),
            description: t('newsInsights.lorem')
        },
        {
            img: "",
            title: t("newsInsights.news"),
            description: t('newsInsights.lorem')
        },
        {
            img: img,
            title: t("newsInsights.news"),
            description: t('newsInsights.lorem')
        }
    ]
    return (
        <div>
            <Filter categories={["News", "Blog", "E-books"]} />

            <div className="news-container">
                {blogData.map(news => <Blog data={news} /> )}
            </div>

        </div>
    );
}

export default NewsInsights;