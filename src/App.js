import { useState } from 'react';
import {useTranslation} from 'react-i18next'

import './App.css';
import Navbar from './components/navbar/Nav-mobile'
import Launch from './components/launch/Launch'
import Footer from './components/footer/Footer'


//features images
import backImgMobile from './assets/images/mobile/Mask Group 37.png'
import backImgDesktop from './assets/images/Mask.png'

import './resources/translations'
import {Helmet} from 'react-helmet';

import Home from './pages/home/Home';

function App(){

const { i18n} = useTranslation();

  const [currentPage, setCurrentPage] = useState(<Home />)

  const [language, setLanguage] = useState('en');
  const changeLanguage = (lang) => {
    setLanguage(lang)
    i18n.changeLanguage(lang);
  }

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

      <Navbar languageHandler={changeLanguage} pageHandler={setCurrentPage} />

      {currentPage}

      <Launch />
      <Footer />
    </div>
  );
}

export default App;
