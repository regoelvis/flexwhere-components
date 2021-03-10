import React, {useState} from 'react'
import './Navbar.css'

import flwLogo from '../../assets/images/FW logo.svg'

export default function NavbarMobile(){

    const [menuVisible, setMenuVisibility] = useState(false);
    // const [locationVisible, setLocationVisible] = useState(false);
    // const [location, setLocation] = useState('NL');
    // const [featuresVisible, setFeaturesVisible] = useState(false);

    return (
        <nav className="d-flex navbar navbar-light flex-justify-spacebetween">
            { menuVisible &&
                <div>
                    <img src={flwLogo} alt="flexwhere logo" className="flw-blue border-rounded" />
                </div>
            }

            <div className="d-flex flex-alignitems-center">
                <div className="hamburger-menu" onClick={()=>setMenuVisibility(!menuVisible)}>
                    {/* Menu open and close buttons */}
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
                            <rect className="border-rounded menu-close left" width="2rem" height="0.2rem" y="1.1rem" x="-1.5rem" />
                            <rect className="border-rounded menu-close right" width="2rem" height="0.2rem" x="0.35rem" />
                        </svg>
                    }
                </div>

                

            </div>
        </nav>
    );
}