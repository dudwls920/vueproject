import Vue from 'vue'
import VueI18n from 'vue-i18n'
import httpService from '../../service/httpService'
import apiConfig from '../../config/apiConfig'

Vue.use(VueI18n)

const DEFAULT_LANG = window.sessionStorage.getItem('locale') != null ? window.sessionStorage.getItem('locale') : 'KO'

const en = require('./locales/en.json')
const ko = require('./locales/ko.json')

// function loadLocaleMessages() {
//   const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
//   const messages = {}
//   locales.keys().forEach(key => {
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//     if (matched && matched.length > 1) {
//       const locale = matched[1]
//       messages[locale] = locales(key)
//     }
//   })
//   return messages
// }
const locales = {
  EN: en,
  KO: ko,
  // EN: import('./locales/en.json'),
  // KO: import('./locales/en.json'),
}

const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  // fallbackLocale: 'en',
  messages: locales,
})

/* eslint-disable */ 
async function getLang() {
  httpService.Get_Param(apiConfig.API.USER.userDefineLanguage,
    { params: { userId: window.sessionStorage.getItem('userId') } })
    .then(data => data)
}
/* eslint-enable */

export default i18n
