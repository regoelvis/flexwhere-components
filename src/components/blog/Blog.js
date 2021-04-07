import React from 'react';
import PropTypes from 'prop-types';
import './Blog.css';

function Masonary(props){
    // Render the component if atleast one prop is present
    if( props?.data?.img!==undefined ||
        props?.data?.title !==undefined ||
        props?.data?.description !==undefined ||
        props?.data?.date !==undefined ||
        props?.data?.author !==undefined ||
        props?.data?.authorImg !==undefined )

        return(
            <div className={"blog " + props?.data?.type}>
                
                { props?.data?.img &&
                    <div>
                        <img 
                        src={props.data.img} 
                        alt={props.data.img} 
                        className="img-fluid"></img>
                    </div>
                }

                <div className="content">
                    <section className="blog-content">
                        
                        {/* Split the first word out for colour change ("Blue") and render the rest as it is*/}
                        <h2> 
                            <span className={props?.data?.type}>
                                {props?.data.title.split(' ')[0]}
                            </span>
                            
                            {props?.data.title.replace(props?.data.title.split(' ')[0], '')}
                        </h2>

                        <p>{props?.data.description}</p>
                        
                        <section className="read-more">
                            <span >Read more</span>
                            
                            <section className="author-section">
                                {//Display only if the author and date is passed
                                    (props?.data?.author!==undefined && props?.data?.date!==undefined) &&
                                    <div>
                                        <p className="date">{props?.data.date}</p>
                                        <p className="author">Written by {props?.data.author}</p>
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
    
    else
        return null;
}

Masonary.propTypes = {
    data: PropTypes.shape({
        type: PropTypes.string.isRequired,
        img: PropTypes.string,
        title : PropTypes.string,
        description: PropTypes.string,
        author: PropTypes.string,
        date: PropTypes.string,
        authorImg: PropTypes.string
    })
}

export default Masonary;