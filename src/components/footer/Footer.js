import React from 'react'
import './Footer.css'

import facebookIcon from './../../assets/images/F.svg'
import twitterIcon from './../../assets/images/T.svg'
import linkedInIcon from './../../assets/images/L.svg'

import appStore from '../../assets/images/App store.svg'
import gPlay from '../../assets/images/Google play.svg'

import iso from '../../assets/images/ISO 9001.svg'
import dv from '../../assets/images/powered-by-dv.svg'
import flwLogo from '../../assets/images/FW logo.svg'

function Footer(){
    return (
        <footer className="footer-container">
            <div className="d-flex flex-column flex-alignitems-start col-12">

                <div className="footer-row-1">
                    <div className="logo my-3">
                        <img src={flwLogo} alt="FlexWhere Logo"></img>
                    </div>

                    <div className="d-flex links">
                        <div className="d-flex flex-column">
                            <span className="white font-weight-feature">Sitemap</span>
                            <span>Features</span>
                            <span>News &amp; Insghts</span>
                            <span>Customer Tools</span>
                            <span>Prices</span>
                            <span>About us</span>
                        </div>

                        <div className="d-flex flex-column">
                            <span className="white font-weight-feature" >Contact</span>
                            <span>General: +44 (0)20 38681867</span>
                            <span>office@flexwhere.com</span>
                            <span>Achter de muren Zandpoort 10</span>
                            <span> Deventer</span>
                        </div>

                        <div className="d-flex flex-column">
                            <span className="white font-weight-feature">Support</span>
                            <span>+44 (0)20 38681867</span>
                            <span>support@flexwhere.com</span>
                            <span>Business days 07:00-17:00</span>
                        </div>
                    </div>

                </div>

                <div className="footer-row-2">
                    <div className="social">
                        <img src={facebookIcon} alt="facebook" ></img>
                        <img src={twitterIcon} alt="twitter" ></img>
                        <img src={linkedInIcon} alt="linkedin" ></img>
                    </div>

                    <div className="apps-standards">
                        <div className="apps">
                            <img className="icon" src={appStore} alt="app Store"></img>
                            <img className="icon" src={gPlay} alt="play"></img>
                        </div>

                        <div className="standards">
                            <div className="col-s-3">
                                <img src={iso} alt="iso"></img>
                                <img src={iso} alt="iso"></img>    
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-row-3">
                    <div className="privacy">
                        <span>Privacy Statement</span> <span className="dash">-</span>
                        <span>Cookie Statement</span><span className="dash">-</span>
                        <span>Disclaimer</span> <span className="dash">-</span>
                        <span>Terms and conditions</span> <span className="dash">-</span>
                        <span>Colofon</span> <span className="dash">-</span>
                        <span>FlexWhere 2021</span>
                    </div>

                    <div className="col-s-3 logo">
                        <img src={dv} alt="dv Logo"></img>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;