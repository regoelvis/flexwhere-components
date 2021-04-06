import React from 'react';
import PropTypes from 'prop-types';
import './Story.css';

function Story(props){
    /**
     * Render the entire component only if any one prop is present else return null
     * */ 
    if(props.data?.img !== undefined || props.data?.logo !== undefined || props.data?.title !== undefined || props.data?.company !== undefined )
        return ( 
            <div className="d-flex">
                <div className="story">
                    {/* Image section takes image source prop */}
                    <div className="img-title">

                        { props.data?.img &&
                            <div className="image w-100">
                                <div>
                                    { props.data?.img.map( imgSource => <img src={imgSource} alt="portrait"></img> ) }
                                </div>
                            </div>
                        }

                        {/* company logo and description */}
                        <div className="story-details flex-column w-100">
                            { props.data?.logo && <img src={props.data?.logo} className="companyLogo img-fluid" alt="logo"></img> }
                            
                            <h2>{props.data?.title}</h2>
                            <h4 className="font-weight-300">{props.data?.company}</h4>
                        </div>

                    </div>
                    
                    
                    { /* More section commented because it was removed from older design */
                        // props.data?.moreText &&// <div className="more col-4 w-100">//     <div className="w-100">//         <button className="btn btn-primary border-white text-white border-pill font-weight-300">{props.data.moreText}</button>//     </div>// </div>
                    }

                </div>
            </div>
        );
    
        else return null;
}

Story.propTypes = {
    data : PropTypes.shape({
        img: PropTypes.string,
        logo: PropTypes.string,
        title: PropTypes.string,
        company: PropTypes.string
    })
}

export default Story;