import React, { useState } from 'react';
import './Feature.css'

export default function Feature(props){
    const [featureDirection, setFeatureDirection] = useState('row');

    const type = props.type === "row" ? "row" : "row row-reverse" ;
    return(
        <div className={featureDirection+ " my-4 mx-2 text-left font-montserrat"}>
            <div className="col col-s-7 col-xs-12 back-blur">
                <img className="img-fluid" src={props?.img} alt={props?.img} />
            </div>

            <div className="d-flex flex-column col col-s-5 col-xs-12 px-1 pr-2 py-2 flex-justify-center ">
                <div className="d-flex">
                    <h1 className="bold"> {props?.title} </h1>
                </div>
                <div className="d-flex flex-column">
                    <div className="row flex-alignitems-center">
                        {
                            props?.featureImg &&
                            <div className="col-1">
                                <img className="img-fluid" src={props?.featureImg} alt={props?.featureImg} />
                            </div>
                        }
    
                        <span className="font-montserrat medium mx-1">{props?.featureName}</span>
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
}