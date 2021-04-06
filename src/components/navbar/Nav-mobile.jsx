import React from 'react'
import { useTranslation } from 'react-i18next';

import './Navbar.css';
// import flwLogo from '../../assets/images/FW logo.svg';
import HamburgerMenu from './HamburgerMenu';
import Logo from './Logo';

//pages
import NewsInsights from '../../pages/newsInsignts/NewsInsights';
import Home from '../../pages/home/Home';


export default function NavbarMobile(props){
    const {t} = useTranslation();

    const {menuVisible, windowWidth,  featureChevron, featuresVisible,
         location, locationChevron, locationVisible} = props.data;

    const {changeFeatureChevron, changeLocationChevron, setLocation, setLocationVisible,
         setMenuVisibility, pageHandler, languageHandler } = props.handlers;

    return (
        <nav className="d-flex navbar">
            {/* Display logo if menu is not visible */}
            <Logo menuVisible={!menuVisible} />

            <div className="d-flex navbody flex-column flex-justify-center">

                <div className={ menuVisible === false ? "hamburger-menu flex-justify-right": "hamburger-menu flex-justify-left" } 
                    onClick={()=>setMenuVisibility(!menuVisible)}>

                    {/* HamburgerMenu open and close buttons */}
                    <HamburgerMenu menuVisible={menuVisible} />

                </div>

                { (menuVisible || windowWidth>576) &&

                    <div className="d-flex menu menu-blue">

                        <div className="d-flex features">
                            <div className="d-flex ml-3">
                                <button className="btn btn-primary rounded"> {t('navbar.launch')} </button>
                            </div>

                            <div className="d-flex flex-column flex-alignitems-start navbar-item bold">

                                <ul className="navbar-item text-black">
                                    <li className="navbar-item text-black feature" onClick={()=> pageHandler(<Home />)}>
                                        <span onClick={changeFeatureChevron}> {t('navbar.features')}
                                            <span className={`chevron ${featureChevron} blue`}></span> 
                                        </span>
                                        {  featuresVisible &&
                                            <div> 
                                                <ul>
                                                    <li className="py-1">Desk Booking</li>
                                                    <li className="py-1">Meeting room booking</li>
                                                    <li className="py-1">Statistics</li>
                                                    <li className="py-1">Covid-19</li>
                                                </ul>
                                            </div>
                                        }
                                    </li>
                                    <li className="navbar-item text-black " onClick={()=> pageHandler(<NewsInsights />)}>{t('navbar.newsInsights')}</li>
                                    <li className="navbar-item text-black ">{t('navbar.customerStories')}</li>
                                    <li className="navbar-item text-black ">{t('navbar.pricing')}</li>
                                    <li className="navbar-item text-black ">{t('navbar.about')} </li>
                                </ul>
                            </div>
                        </div>
                    
                        <div className="d-flex support">
                            <ul className="small">
                                <li className="navbar-item"> <a href="/support">{t('navbar.support')}</a></li>
                                <li className="navbar-item"><a href="/contact">{t('navbar.contact')}</a></li>
                                <li className="navbar-item"> <a href="/login">{t('navbar.login')}</a></li>
                                <li className="navbar-item"> 
                                    <span onClick={changeLocationChevron}>{location}
                                        <span className={`chevron ${locationChevron}`}></span>
                                            {
                                                locationVisible && 
                                
                                                <div className="dropdown-menu">
                                                    <div className="btn" onClick={()=> {setLocation('NL'); setLocationVisible(!locationVisible); languageHandler('nl')} } ><a href="#https://flexwhere.nl">NL</a></div>
                                                    <div className="btn" onClick={()=> {setLocation('DE'); setLocationVisible(!locationVisible); languageHandler('de')} }><a href="#https://flexwhere.de">DE</a></div>
                                                    <div className="btn" onClick={()=> {setLocation('UK'); setLocationVisible(!locationVisible); languageHandler('uk')} }><a href="#https://flexwhere.co.uk">UK</a></div>
                                                </div>
                                            }
                                    </span> 
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                }

            </div>
        </nav>
    );
}