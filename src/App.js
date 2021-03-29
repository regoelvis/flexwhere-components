import { useState } from 'react';
import {useTranslation} from 'react-i18next'

import './App.css';
import Navbar from './components/navbar/Nav-mobile'
import Feature from './components/feature/Feature'
import Story from './components/customerstory/Story'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'

//features images
import backImgMobile from './assets/images/mobile/Mask Group 37.png'
import backImgDesktop from './assets/images/Mask.png'

//story images
import man from './assets/images/mask-group-44.png'
import logo from './assets/images/logo.svg'

//feature images
import desk from './assets/images/ICON_Desk booking.svg';
import img from './assets/images/Picture1.png'

import './resources/translations'
import {Helmet} from 'react-helmet';

function App(){

const {t, i18n} = useTranslation();

//data for story
const storyData = {
  img: man,
  logo: logo,
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
      title: t('features.title'),
      featureImg: desk,
      featureName: t('features.deskBooking'),
      description: t('features.normalText'),
      more: true
    },
    {
      type: "reverse",
      img: img,
      title:"Feature 1, with icon and 2 lines",
      featureImg: desk,
      featureName: "Desk booking",
    },
    {
      type: "row",
      img: img,
      featureName: t('features.deskBooking'),
      description: t('features.normalText'),
    },
    {
      type: "reverse",
      img: img,
      featureName: "The use of FlexWhere provides us with extra square meters of workspace",
      description: t('features.normalText'),
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
    <div className="App" style={{backgroundImage: `url('${ window.innerWidth<578? backImgMobile : backImgDesktop}')`, backgroundSize: 'cover' }}>
      <Helmet>
        <title>FlexWhere {language.toUpperCase()}</title>
      </Helmet>

      <Navbar languageHandler={changeLanguage} />
      {features}
      <Story data={storyData} />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
