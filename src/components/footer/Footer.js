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

import { useTranslation } from 'react-i18next'

function Footer(){
    const {t} = useTranslation();

    return (
        <footer className="footer-container">
            <div className="d-flex flex-column flex-alignitems-start col-12">

                <div className="footer-row-1">
                    <div className="logo my-3">
                        <img src={flwLogo} alt="FlexWhere Logo"></img>
                    </div>

                    <div className="d-flex links">
                        <div className="d-flex flex-column">
                            <span className="white font-weight-feature">{t('footer.sitemap')}</span>
                            <span>{t('footer.features')}</span>
                            <span>{t('footer.newsInsights')}</span>
                            <span> {t('footer.tools')}</span>
                            <span>{t('footer.prices')}</span>
                            <span>{t('footer.aboutUs')}</span>
                        </div>

                        <div className="d-flex flex-column">
                            <span className="white font-weight-feature" >{t('footer.contact')}</span>
                            <span>{t('footer.general')}</span>
                            <span>{t('footer.officeFlw')}</span>
                            <span>Achter de muren Zandpoort 10</span>
                            <span> Deventer</span>
                        </div>

                        <div className="d-flex flex-column">
                            <span className="white font-weight-feature">{t('footer.support')}</span>
                            <span>+44 (0)20 38681867</span>
                            <span>{t('footer.supportFlw')}</span>
                            <span>{t('footer.businessDays')}</span>
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
                        <span>{t('footer.privacyStatement')}</span> <span className="dash">-</span>
                        <span>{t('footer.cookieStatement')}</span><span className="dash">-</span>
                        <span>{t('footer.disclaimer')}</span> <span className="dash">-</span>
                        <span>{t('footer.termsAndConditions')}</span> <span className="dash">-</span>
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