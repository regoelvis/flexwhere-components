import React from 'react';
import './Feature.css'

export default function Feature(props){
    const type = props.type === "row" ? "row" : "row row-reverse" ;
    return(
        <div className={type+ " my-4 mx-2 text-left"}>
            <div className="col col-s-7 col-xs-12 back-blur">
                <img className="img-fluid" src={props?.img} alt={props?.img} />
            </div>

            <div className="d-flex flex-column col col-s-5 col-xs-12 px-1 pr-2 py-2 flex-justify-center ">
                <div className="d-flex">
                    <h1 > {props?.title} </h1>
                </div>
                <div className="d-flex flex-column">
                    <div className="row">
                        {
                            props?.featureImg &&
                            <div className="col-1">
                                <img className="img-fluid" src={props?.featureImg} alt={props?.featureImg} />
                            </div>
                        }
    
                        <span className="font-weight-light">{props?.featureName}</span>
                    </div>
                    <p className="font-weight-low">{props?.description}</p>

                    {
                        props?.more && 
                        <button className="btn-primary">Read More</button>
                    }
                </div>
            </div>
        </div>
    );
}