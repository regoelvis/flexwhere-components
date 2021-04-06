import React from 'react';
import './NewsInsights.css';
import {useTranslation} from 'react-i18next';
import Filter from './filter/Filter';
import Masonary from './masonary/Masonary';

import image from '../../assets/images/Outlook.png'
import img from '../../assets/images/mask-group-44.png';
import sjoerd from '../../assets/images/sjoerd-blog.png';

function NewsInsights(props){
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
            title: "Blog This is the space where max 3 lines will fit , 2 lines are also allowed.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ut erat nec commodo. Max 4 lines of text in this area and min 3 lines.  "
        },
        {
            type:"ebook",
            img: "",
            title: "E-book This is the space where max 3 lines will fit , 2 lines are also allowed.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ut erat nec commodo. Max 4 lines of text in this area and min 3 lines.  "
        },
        {
            img: "",
            title: "News This is the space where max 3 lines will fit , 2 lines are also allowed.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ut erat nec commodo. Max 4 lines of text in this area and min 3 lines.  "
        },
        {
            img: img,
            title: "News This is the space where max 3 lines will fit , 2 lines are also allowed.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ut erat nec commodo. Max 4 lines of text in this area and min 3 lines.  "
        }
    ]
    return (
        <div>
            <Filter categories={["News", "Blog", "E-books"]} />

            <div className="news-container">
                {blogData.map(news => <Masonary data={news} /> )}
            </div>

        </div>
    );
}

export default NewsInsights;