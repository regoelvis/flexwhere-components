import React from 'react'
import './Footer.css'

import facebookIcon from './../../assets/images/F.svg'
import twitterIcon from './../../assets/images/T.svg'
import linkedInIcon from './../../assets/images/L.svg'

import appStore from '../../assets/images/App store.svg'
import gPlay from '../../assets/images/Google play.svg'

import iso from '../../assets/images/ISO 9001.svg'
import dv from '../../assets/images/powered-by-dv.svg'

function Footer(){
    return (
        <footer className="footer-container">
            <div className="d-flex flex-column flex-alignitems-start col-12 py-4">

                <div className="d-flex links">
                    <div className="d-flex flex-column my-2">
                        <span className="white font-weight-feature">Sitemap</span>
                        <span>Features</span>
                        <span>News &amp; Insghts</span>
                        <span>Customer Tools</span>
                        <span>Prices</span>
                        <span>About us</span>
                    </div>

                    <div className="d-flex flex-column my-2">
                        <span className="white font-weight-feature" >Contact</span>
                        <span>General: +44 (0)20 38681867</span>
                        <span>office@flexwhere.com</span>
                        <span>Achter de muren Zandpoort 10</span>
                        <span> Deventer</span>
                    </div>

                    <div className="d-flex flex-column my-2">
                        <span className="white font-weight-feature">Support</span>
                        <span>+44 (0)20 38681867</span>
                        <span>support@flexwhere.com</span>
                        <span>Business days 07:00-17:00</span>
                    </div>
                </div>

                <div className="social">
                    <img src={facebookIcon} alt="facebook" ></img>
                    <img src={twitterIcon} alt="twitter" ></img>
                    <img src={linkedInIcon} alt="linkedin" ></img>
                </div>

                <div className="apps">
                    <img src={appStore} alt="app Store"></img>
                    <img src={gPlay} alt="play"></img>
                </div>

                <div className="standards">
                    <img src={iso} alt="iso"></img>
                    <img src={iso} alt="iso"></img>
                </div>

                <div className="privacy">
                    <span>Privacy Statement</span> <span>-</span>
                    <span>Cookie Statement</span><span>-</span>
                    <span>Disclaimer</span> <span>-</span>
                    <span>Terms and conditions</span> <span>-</span>
                    <span>Colofon</span> <span>-</span>
                    <span>FlexWhere 2021</span>
                </div>

                <img src={dv} alt="dv Logo"></img>


            </div>
        </footer>
    );
}

export default Footer;