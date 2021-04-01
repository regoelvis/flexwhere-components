import React from 'react';
import './Feature.css'

export default function Feature(props){

    const type = ( window.innerWidth >= 578) ? props.type : "";
    /**
     * Render the entire component only if any one prop is present else return null
     * */ 

    if(props?.img !==undefined || props?.title !==undefined || props?.featureImg !==undefined || props?.featureName !==undefined || props?.description !==undefined)
        return(
            <div className={type+ " flw-feature text-left font-montserrat"}>

                <div className="col col-12 col-s-7 col-xs-12 back-blur image">
                    <img className="img-fluid" src={props?.img} alt={props?.img} />
                </div>

                <div className="col col-s-5 col-xs-12 flex-justify-center description">
                    <div className="d-flex">
                        <h1 className="bold"> {props?.title} </h1>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="row flex-alignitems-center">
                            {
                                props?.featureImg &&
                                <div className="col-1 mr-1">
                                    <img className="img-fluid" src={props?.featureImg} alt={props?.featureImg} />
                                </div>
                            }
        
                            <span className="font-montserrat medium">{props?.featureName}</span>
                        </div>
                        <p className="font-montserrat regular">{props?.description}</p>

                        {
                            props?.more && 
                            <div>
                                <button className="btn-primary pill text-white">Read More</button>
                            </div>
                        }
                    </div>
                </div>

            </div>
        );
    else return null;
}