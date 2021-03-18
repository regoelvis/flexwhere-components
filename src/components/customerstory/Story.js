import React from 'react';
import './Story.css';

import gemtee from '../../assets/images/mask-group-44.png'
import logo from '../../assets/images/logo.svg'

function Story(props){
    return (
        <div className="d-flex">
            <div className="story">
                <div className="image col-4">
                    <img src={gemtee} alt="portrait"></img>
                </div>

                <div className="story-details col-4 flex-column">
                    <img src={logo} className="companyLogo" alt="logo"></img>
                    <h4 >{props?.title}</h4>
                    <h4 className="font-weight-300">{props?.company}</h4>
                </div>

                <div className="more col-4">
                    <button className="btn btn-primary border-white text-white border-pill font-weight-300">{props.moreText}</button>
                </div>
            </div>
        </div>
    );
}

export default Story;