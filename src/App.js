import { useState } from 'react';
import {useTranslation} from 'react-i18next'

import './App.css';
import Navbar from './components/navbar/Nav-mobile'
import Feature from './components/feature/Feature'
import Story from './components/customerstory/Story'
import Services from './components/services/Services'
import Launch from './components/launch/Launch'
import Footer from './components/footer/Footer'

import NewsInsights from './components/newsInsignts/NewsInsights'

//features images
import backImgMobile from './assets/images/mobile/Mask Group 37.png'
import backImgDesktop from './assets/images/Mask.png'

//story images
import outlookImg from './assets/images/Outlook.png'
import topdeskImg from './assets/images/Topdesk.png'

//feature images
import desk from './assets/images/ICON_Desk booking.svg';
import covid from './assets/images/group-1751.svg'
import statistics from './assets/images/group-1752.svg'
import meeting from './assets/images/group-1753.svg'

//service images
import privacyIcon from './assets/images/ICON_eye.svg'
import securityIcon from './assets/images/ICON_security.svg'
import softwareIcon from './assets/images/ICON_software.svg'

import img from './assets/images/Picture1.png'

import './resources/translations'
import {Helmet} from 'react-helmet';

function App(){

const {t, i18n} = useTranslation();

//data for story
const storyData = {
  img: [outlookImg, topdeskImg ],
  title: t('story.description'),
  company : t('story.company'),
  moreText : t('story.readMore')
}

//mock data for the features  
const featureData = {
  data : [
    {
      type: "row",
      img: img,
      title: t('features.feature1'),
      featureImg: desk,
      featureName: t('features.deskBooking'),
      description: t('features.normalText'),
      more: true
    },
    {
      type: "reverse",
      img: img,
      title: t('features.feature2'),
      featureImg: meeting,
      featureName: t('features.meetingBooking'),
      description: t('features.normalText'),
      more: true
    },
    {
      type: "row",
      img: img,
      title: t('features.feature3'),
      featureImg: statistics,
      featureName: t('features.statistics'),
      description: t('features.normalText'),
      more: true
    },
    {
      type: "reverse",
      img: img,
      title: t('features.feature4'),
      featureImg: covid,
      featureName: t('features.covid19'),
      description: t('features.normalText'),
      more: true
    }
  ]
}

const serviceData = {
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

  const [language, setLanguage] = useState('en');
  const changeLanguage = (lang) => {
    setLanguage(lang)
    i18n.changeLanguage(lang);
  }

  const features = featureData.data.map(feature => <Feature type={feature?.type} img={feature?.img} title={feature?.title} featureImg={feature?.featureImg} featureName={feature?.featureName} description={feature?.description} more={feature?.more} />)

  /**
   * Declare all the parent/components here
   * 
   * background image is based on window width
   */
  return (
    <div className="App" style={{backgroundImage: `url('${ window.innerWidth<578? backImgMobile : backImgDesktop}')`, backgroundSize: '100% auto' }}>
      
      <Helmet>
        <title>FlexWhere {language.toUpperCase()}</title>
      </Helmet>

      <Navbar languageHandler={changeLanguage} />
      <NewsInsights />
      {/* {features}
      <Story data={storyData} />
      <Services data={serviceData} /> */}
      <Launch />
      <Footer />
    </div>
  );
}

export default App;
