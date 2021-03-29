import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {en} from './locales/en'
import {nl} from './locales/nl'
import {de} from './locales/de'

export const i18next = i18n.use(initReactI18next).init({
    resources: {
        'en': {
            translation: en
        },
        'nl': {
            translation: ({ ...en, ...nl })
        },
        'de': {
            translation: ({ ...en, ...de })
        }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue : false
    }
})