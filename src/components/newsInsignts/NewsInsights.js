import React from 'react';
import './NewsInsights.css';
import Filter from './filter/Filter';
import Masonary from './masonary/Masonary';

import image from '../../assets/images/Outlook.png'
import img from '../../assets/images/mask-group-44.png';
import sjoerd from '../../assets/images/sjoerd-blog.png'

const blogData = [
    {
        img: image,
        title: "Blog This is the space where max 3 lines will fit , 2 lines are also allowed.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ut erat nec commodo. Max 4 lines of text in this area and min 3 lines.  ",
        date: "12 oktober 2020",
        author: "Sjoerd",
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

function NewsInsights(props){
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