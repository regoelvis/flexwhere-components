import React from 'react';

export default function Service(props){
    return (
        <div className="d-flex flex-column col-9 col-s-5 col-md-3 px-2 m3 py-4 bg-white border-blue service">
            <div className="d-flex flex-justify-center col-s-6 ">
                <div className="py-2">
                    <img className="img-fluid" src={props.img} alt="icon"/>
                </div>
            </div>
            <div className="d-flex flex-column flex-align-center mx-1">
                <span className="text-blue font-size-description font-weight-medium">{props.title}</span>
                <p className="text-center">{props.description}</p>
            </div>
        </div>
    );
} 