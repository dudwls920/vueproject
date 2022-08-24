import axios from 'axios'
import i18n from './libs/i18n/index'
import httpService from './service/httpService'
import apiConfig from './config/apiConfig'

const storage = window.sessionStorage

export default {
  async loggedIn() {
    // Shine VUE Starter Kit
    // try {
    //   const res = await axios.get('/api/tokenValidate', {
    //     params: {
    //       token: storage.getItem('jwt-auth-token'),
    //       userId: storage.getItem('userId'),
    //     },
    //   })

    //   return res.data.valid
    // } catch (err) {
    //   return false
    // }
    return true
  },

  async logIn(id, password) {
    // Send request
    try {
      const res = await axios.post('/api/login', {
        id,
        password,
      })

      if (res.status === 202 && res.data.status === true) {
        storage.setItem('userId', id)
        const locale = await httpService.Get_Param(
          apiConfig.API.USER.userDefineLanguage,
          { params: { userId: window.sessionStorage.getItem('userId') } },
        )
        storage.setItem('locale', locale)
        i18n.locale = locale

        return {
          isOk: true,
          data: id,
          menu: res.data.menus,
        }
      }
      return {
        isOk: false,
      }
    } catch (err) {
      return {
        isOk: false,
      }
    }
  },

  async logOut() {
    storage.setItem('jwt-auth-token', '')
    storage.setItem('userId', null)
  },

  async getUser() {
    try {
      // Send request
      return {
        isOk: true,
        data: {
          email: storage.getItem('userId'),
        },
      }
    } catch {
      return {
        isOk: false,
      }
    }
  },

  async getUserFavoriteMenu(path, userId) {
    try {
      const result = await axios.get('/api/user-favorites/user-favorite-menu', {
        params: {
          path,
          userId,
        },
      })
      if (result.data === undefined || result.data === '') {
        return null
      }
      return result.data
    } catch {
      return null
    }
  },
}
