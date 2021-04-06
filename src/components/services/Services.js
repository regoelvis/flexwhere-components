import React from 'react';
import PropTypes from 'prop-types';
import Service from './Service'
import './Services.css'

export default function Services(props){

    /**
     * Render the entire component only if any one prop is present else return null
     * */ 
    
      if( props?.data !==undefined || props?.data?.title !==undefined) {
        const services = props?.data.services.map((service)=> <Service img={service.img} title={service.title} description={service.description} /> )

        return (
          <div className="d-flex flex-column" >
              <div className="d-flex flex-justify-center">
                  <p className="mx-2 font-size-large">
                      <span className="font-weight-medium">{props?.data.title.split(" ")[0]} </span> 
                      {props?.data.title.substr(5,20)}
                  </p>
              </div>
          
              <div className="d-flex flex-column flex-alignitems-center">
                <div className="d-flex row flex-justify-center m1 flex-wrap">
                    {services }
                </div>

                <div className="more-blogs">
                  <button className="btn border-blue next-blog pill text-blue transparent">Next blog</button>
                </div>
              </div>
          </div>
        );
      }
      else return null;
} 

Services.PropTypes = {
  data : PropTypes.shape({
    title: PropTypes.string.isRequired,
    services: PropTypes.array.isRequired
  })
}