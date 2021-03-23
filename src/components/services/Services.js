import React from 'react';
import Service from './Service'
import './Services.css'
import privacyIcon from '../../assets/images/ICON_eye.svg'
import securityIcon from '../../assets/images/ICON_security.svg'
import softwareIcon from '../../assets/images/ICON_software.svg'

export default function Services(){
    const data = {
        title : "What you can expect of us",
        services : [
          {
            img : privacyIcon,
            title : "Privacy",
            description : "Privacy is important to us. That is why we make our software with privacy in mind."
          },
          {
            img : securityIcon,
            title : "Security",
            description : "We maintain security at the highest level with our own security expert."
          },
          {
            img : softwareIcon,
            title : "Software-only",
            description : "Our software is made for convenience and works without additional hardware."
          }
        ]
      }

      const services = data.services.map((service)=> <Service img={service.img} title={service.title} description={service.description} /> )
    return (
        <div className="d-flex flex-column" >
            <div className="d-flex flex-justify-center">
                <p className="mx-2 font-size-large">
                    <span className="font-weight-medium">{data.title.split(" ")[0]} </span> 
                    {data.title.substr(5,20)}
                </p>
            </div>
        
            <div className="d-flex flex-column flex-alignitems-center">
              <div className="d-flex row flex-justify-center m1 flex-wrap">
                  {services }
              </div>

              <div className="more-blogs">
                <button className="btn border-blue pill text-blue transparent">Next blog</button>
              </div>
            </div>
      </div>
    );
} 