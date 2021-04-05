import React, {useState} from 'react'
import './Navbar.css'

import NewsInsights from '../newsInsignts/NewsInsights';
import Home from '../../pages/home/Home';

import flwLogo from '../../assets/images/FW logo.svg'
import { useTranslation } from 'react-i18next';

export default function NavbarMobile(props){

    const {t} = useTranslation();

    const [windowWidth,setWindowWidth] = useState(window.innerWidth);

    const [locationVisible, setLocationVisible] = useState(false);
    const [location, setLocation] = useState('NL');
    const [menuVisible, setMenuVisibility] = useState(false);
    const [featuresVisible, setFeaturesVisible] = useState(false);

    const [featureChevron, setFeatureChevronType] = useState('chevron-bottom');
    const [locationChevron, setLocationChevronType] = useState('chevron-bottom');

    //handlers for changing the chevron direction
    const changeChevron = () => {
        setFeatureChevronType((prevValue) => {
            setFeaturesVisible(!featuresVisible);
            if(prevValue ==='chevron-bottom')
                return 'chevron-top';
            else 
                return 'chevron-bottom';
        })
    };

    const changeLocationChevron = () => {
        setLocationChevronType((prevValue) => {
            setLocationVisible(!locationVisible);
            if(prevValue ==='chevron-bottom')
                return 'chevron-top';
            else 
                return 'chevron-bottom';
        })
    };

    //change the width of the document
    document.onresize = ()=> setWindowWidth(document.innerWidth)

    return (
        <nav className="d-flex navbar">
            {/* Display logo if menu is not visible */}
            { !menuVisible &&
                <div className="col-3 col-md-1">
                    <img src={flwLogo} alt="flexwhere logo" className="img-fluid flw-blue border-rounded" />
                </div>
            }

            <div className="d-flex navbody flex-column flex-justify-center">
                <div className={ menuVisible === false ? "hamburger-menu flex-justify-right": "hamburger-menu flex-justify-left" } onClick={()=>setMenuVisibility(!menuVisible)}>
                    {/* Menu open and close buttons */}
                    {
                        !menuVisible &&
                        <svg width="2rem" height="2rem">
                            <rect className="border-rounded" width="2rem" height="0.2rem" y="0" />
                            <rect className="border-rounded" width="1.5rem" height="0.2rem" y="0.75rem" />
                            <rect className="border-rounded" width="2rem" height="0.2rem" y="1.5rem" />
                        </svg>
                    }
                    
                    {
                        menuVisible &&
                        <svg className="m2" width="1rem" height="1rem">
                            <rect className="border-rounded menu-close left" width="1rem" height="0.1rem" y="0.6rem" x="-0.55rem" />
                            <rect className="border-rounded menu-close right" width="1rem" height="0.1rem" x="0.125rem" />
                        </svg>
                    }
                </div>

                { (menuVisible || windowWidth>576) &&

                    <div className="d-flex menu menu-blue">

                        <div className="d-flex features">
                            <div className="d-flex ml-3">
                                <button className="btn btn-primary rounded"> {t('navbar.launch')} </button>
                            </div>

                            <div className="d-flex flex-column flex-alignitems-start navbar-item bold">

                                <ul className="navbar-item text-black">
                                    <li className="navbar-item text-black feature" onClick={()=> props.pageHandler(<Home />)}>
                                        <span onClick={changeChevron}> {t('navbar.features')}
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
                                    <li className="navbar-item text-black " onClick={()=> props.pageHandler(<NewsInsights />)}>{t('navbar.newsInsights')}</li>
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
                                                    <div className="btn" onClick={()=> {setLocation('NL'); setLocationVisible(!locationVisible); props.languageHandler('nl')} } ><a href="#https://flexwhere.nl">NL</a></div>
                                                    <div className="btn" onClick={()=> {setLocation('DE'); setLocationVisible(!locationVisible); props.languageHandler('de')} }><a href="#https://flexwhere.de">DE</a></div>
                                                    <div className="btn" onClick={()=> {setLocation('UK'); setLocationVisible(!locationVisible); props.languageHandler('uk')} }><a href="#https://flexwhere.co.uk">UK</a></div>
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