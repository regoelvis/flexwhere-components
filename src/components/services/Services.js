import React from 'react';
import Service from './Service'
import './Services.css'
import privacyIcon from '../../assets/images/ICON_eye.svg'
import securityIcon from '../../assets/images/ICON_security.svg'
import softwareIcon from '../../assets/images/ICON_software.svg'

import { useTranslation } from 'react-i18next'

export default function Services(){
  const [ t ] = useTranslation();

  // i18n.changeLanguage('en')

    const data = {
        title : t('services.title'),
        services : [
          {
            img : privacyIcon,
            title : t("services.privacy"),
            description : t('services.privacyDescription')
          },
          {
            img : securityIcon,
            title : t("services.security"),
            description : t("services.securityDescription")
          },
          {
            img : softwareIcon,
            title : t("services.softwareOnly"),
            description : t('services.softwareDescription')
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