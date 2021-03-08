import React, {useState} from 'react'
import './Navbar.css'

import flwLogo from '../../assets/images/FW logo.svg'

export default function Navbar(){

    const [locationVisible, setLocationVisible] = useState(false);
    const [location, setLocation] = useState('NL');

    return (
        <div className="d-flex navbar col-12">
            <div>
                <img src={flwLogo} alt="flexwhere logo" className="flw-blue border-rounded" />
            </div>

            <div className="hamburger-menu">
                <svg width="3rem">
                    <rect className="border-rounded" width="2.5rem" height="5" />
                    <rect className="border-rounded" width="1.5rem" height="5" y="15" />
                    <rect className="border-rounded" width="2.5rem" height="5" y="30" />
                </svg>
            </div>
            
            <div className="d-flex flex-column col-12">
                <nav className="d-flex flex-justify-right flex-alignitems-center">
                    <ul>
                        <li className="navbar-item"> <a href="/support">SUPPORT</a></li>
                        <li className="navbar-item"><a href="/contact">CONTACT</a></li>
                        <li className="navbar-item"> <a href="/login">LOGIN</a></li>
                    </ul>
                    <div className="navbar-item">

                    <span onClick={() => setLocationVisible(!locationVisible)}>{location}
                        <span className="chevron chevron-bottom"></span>
                    </span>
                        {
                            locationVisible && 
                            
                            <div className="dropdown-menu">
                                <div className="btn" onClick={()=> {setLocation('NL'); setLocationVisible(!locationVisible)} } ><a href="https://flexwhere.nl">NL</a></div>
                                <div className="btn" onClick={()=> {setLocation('DE'); setLocationVisible(!locationVisible)} }><a href="https://flexwhere.de">DE</a></div>
                                <div className="btn" onClick={()=> {setLocation('UK'); setLocationVisible(!locationVisible)} }><a href="https://flexwhere.co.uk">UK</a></div>
                            </div>
                        }

                    </div>
                </nav>

                <div className="d-flex flex-justify-spacebetween mx-1">
                    <div className="d-flex mx-2 flex-alignitems-center">
                        <div className="navbar-item text-black mx-2">
                            Features
                            <span className="chevron chevron-bottom blue"></span>
                        </div>

                        <div className="navbar-item text-black mx-2">News & Insights</div>
                        <div className="navbar-item text-black mx-2"> Customer Stories</div>
                        <div className="navbar-item text-black mx-2"> Pricing</div>
                        <div className="navbar-item text-black mx-2"> About</div>

                    </div>
                    <div className="flex-alignself-end">
                        <button className="btn btn-primary ">Launch</button>
                    </div>

                </div>
            </div>
        </div>
    );
}