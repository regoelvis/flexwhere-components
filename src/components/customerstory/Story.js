import React from 'react';
import './Story.css';

function Story(props){
    return (
        <div className="d-flex">
            <div className="story">
                {/* Image section takes image source prop */}
                { props.data?.img &&
                    <div className="image w-100">
                        <img src={props.data?.img} alt="portrait"></img>
                    </div>
                }

                <div className="story-details col-4 flex-column w-100">
                    { props.data?.logo && <img src={props.data?.logo} className="companyLogo" alt="logo"></img> }
                    
                    <h4 >{props.data?.title}</h4>
                    <h4 className="font-weight-300">{props.data?.company}</h4>
                </div>
                
                {
                    props.data?.moreText &&
                    <div className="more col-4 w-100">
                        <button className="btn btn-primary border-white text-white border-pill font-weight-300">{props.data.moreText}</button>
                    </div>
                }

            </div>
        </div>
    );
}

export default Story;