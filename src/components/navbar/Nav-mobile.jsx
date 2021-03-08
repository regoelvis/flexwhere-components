import React, {useState} from 'react'
import './Navbar.css'

import flwLogo from '../../assets/images/FW logo.svg'

export default function NavbarMobile(){

    const [locationVisible, setLocationVisible] = useState(false);
    const [location, setLocation] = useState('NL');
    const [menuVisible, setMenuVisibility] = useState(false);
    const [featuresVisible, setFeaturesVisible] = useState(false);

    return (
        <nav className="d-flex navbar navbar-light flex-justify-spacebetween">
            { menuVisible &&
                <div>
                    <img src={flwLogo} alt="flexwhere logo" className="flw-blue border-rounded" />
                </div>
            }

            <div className="d-flex flex-alignitems-center">
                <div className="hamburger-menu" onClick={()=>setMenuVisibility(!menuVisible)}>
                    {
                        menuVisible &&
                        <svg width="2rem" height="2rem">
                            <rect className="border-rounded" width="2rem" height="0.2rem" y="0" />
                            <rect className="border-rounded" width="1.5rem" height="0.2rem" y="0.75rem" />
                            <rect className="border-rounded" width="2rem" height="0.2rem" y="1.5rem" />
                        </svg>
                    }

                    {
                        !menuVisible &&
                        <svg width="2rem" height="2rem">
                            <rect className="border-rounded menu-close left" width="2rem" height="0.2rem" y="1.1rem" x="-1.15rem" />
                            <rect className="border-rounded menu-close right" width="2rem" height="0.2rem" x="0.35rem" />
                        </svg>
                    }
                </div>

                {
                    !menuVisible &&

                    <div className="d-flex flex-column py-4 menu menu-blue">

                        <div className="d-flex flex-column flex-alignitems-start navbar-item">
                            <div className="navbar-item text-black mx-2" onClick={()=> setFeaturesVisible(!featuresVisible) }>
                                Features
                                <span className="chevron chevron-bottom blue"></span>
                                {  featuresVisible &&
                                    <div> 
                                        <ul className="">
                                            <li className="py-1">Desk Booking</li>
                                            <li className="py-1">Meeting room booking</li>
                                            <li className="py-1">Statistics</li>
                                            <li className="py-1">Covid-19</li>
                                        </ul>
                                    </div>
                                }
                            </div>

                            <div className="navbar-item text-black mx-2">News & Insights</div>
                            <div className="navbar-item text-black mx-2"> Customer Stories</div>
                            <div className="navbar-item text-black mx-2"> Pricing</div>
                            <div className="navbar-item text-black mx-2"> About</div>

                        </div>
                        <div className="navbar-item">
                            <button className="btn mx-2 btn-primary ">Launch</button>
                        </div>
                    
                        <div>
                            <ul className="px-3">
                                <li className="navbar-item"> <a href="/support">SUPPORT</a></li>
                                <li className="navbar-item"><a href="/contact">CONTACT</a></li>
                                <li className="navbar-item"> <a href="/login">LOGIN</a></li>
                            </ul>
                        </div>

                        <span className="navbar-item mx-3" onClick={() => setLocationVisible(!locationVisible)}>{location}
                            <span className="chevron chevron-bottom"></span>
                            {
                                locationVisible && 
                                
                                <div className="dropdown-menu">
                                    <div className="btn" onClick={()=> {setLocation('NL'); setLocationVisible(!locationVisible)} } ><a href="https://flexwhere.nl">NL</a></div>
                                    <div className="btn" onClick={()=> {setLocation('DE'); setLocationVisible(!locationVisible)} }><a href="https://flexwhere.de">DE</a></div>
                                    <div className="btn" onClick={()=> {setLocation('UK'); setLocationVisible(!locationVisible)} }><a href="https://flexwhere.co.uk">UK</a></div>
                                </div>
                            }
                        </span>
                    </div>                   
                    
                }

            </div>
        </nav>
    );
}