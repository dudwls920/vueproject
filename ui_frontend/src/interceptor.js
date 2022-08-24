import axios from 'axios'
import clonedeep from 'lodash.clonedeep'

axios.interceptors.request.use(config => {
  const configCopy = config

  configCopy.headers['jwt-auth-token'] = window.sessionStorage.getItem(
    'jwt-auth-token',
  )

  if (configCopy.params) {
    const paramsKey = Object.keys(configCopy.params)

    const newParams = clonedeep(configCopy.params)

    delete configCopy.params
    configCopy.params = newParams

    for (let i = 0; i < paramsKey.length; i += 1) {
      const param = configCopy.params[paramsKey[i]]

      if (
        typeof param === 'object'
                && paramsKey[i] !== 'bindvalues'
                && param !== null
      ) {
        const lis = Object.keys(param)

        for (let j = 0; j < lis.length; j += 1) {
          if (param[lis[j]] !== '') {
            configCopy.params[`${paramsKey[i]}.${lis[j]}`] = param[lis[j]]
          }
        }

        delete configCopy.params[paramsKey[i]]
      } else if (param === '') {
        delete configCopy.params[paramsKey[i]]
      }
    }
  }

  return configCopy
})

axios.interceptors.response.use(config => {
  window.sessionStorage.setItem(
    'jwt-auth-token',
    config.headers['jwt-auth-token'],
  )

  return config
})
