import React from 'react';
import './Launch.css'
import {useTranslation} from 'react-i18next'

function Launch(){
    const {t} = useTranslation();
    return (
        <div className="launch" style={{backgroundImage: ''}}>
            <div>
                <h1>{t('launch.launch')}</h1>
                <button className="btn pill yellow">{t('launch.freeTrial')}</button>
            </div>
        </div>
    );
}

export default Launch;