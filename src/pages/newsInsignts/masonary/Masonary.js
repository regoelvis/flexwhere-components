import React from 'react';
import './Masonary.css';

function Masonary(props){
    return(
        <div className={"blog " + props?.data.type}>
            { props?.data?.img &&
                <div>
                    <img src={props.data.img} alt={props.data.img} className="img-fluid"></img>
                </div>
            }
            <div className="content">
                <section className="blog-content">
                    <h2> 
                        <span className={props?.data?.type}>{props.data.title.split(' ')[0]}</span>
                        {props.data.title.replace(props.data.title.split(' ')[0], '')}
                    </h2>

                    <p>{props.data.description}</p>
                    <section className="read-more">
                        <span >Read more</span>
                        <section className="author-section">
                            {
                                (props?.data?.author!==undefined && props?.data?.date!==undefined) &&
                                <div>
                                    <p className="date">{props.data.date}</p>
                                    <p className="author">Written by {props.data.author}</p>
                                </div>
                            }
                            <div>
                                <img src={props?.data?.authorImg} alt={props?.data?.authorImg}></img>
                            </div>
                        </section>
                    </section>
                </section>
            </div>
        </div>
    );
}

export default Masonary;