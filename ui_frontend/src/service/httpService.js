import axios from 'axios'

export default {
  async Get(url) {
    const response = await axios.get(url)

    return response.data
  },
  async Get_Param(url, param) {
    const realParam = param

    if (realParam.params != null) {
      const keys = Object.keys(realParam.params)

      for (let i = 0; i < keys.length; i += 1) {
        if (realParam.params[keys[i]] === '') {
          realParam.params[keys[i]] = null
        }
      }
    }
    const response = await axios.get(url, realParam)

    return response.data
  },
  async Get_Image(url, param) {
    const realParam = {
      responseType: 'arraybuffer',
    }
    realParam.params = param.params
    const response = await axios.get(url, realParam)
    return Buffer.from(response.data, 'binary').toString('base64')
  },
  async Post(url, param) {
    const response = await axios.post(url, param)
    return response.data
  },
  async Patch(url, id, values) {
    const param = id
    for (let i = 0; i < Object.keys(values).length; i += 1) {
      if (Object.keys(values)[i] !== 'id') {
        param[Object.keys(values)[i]] = values[Object.keys(values)[i]]
      }
    }

    const response = await axios.patch(url, param)
    return response.data
  },
  async Put(url, param) {
    const response = await axios.put(url, param)
    return response.data
  },
  async Delete(url) {
    const response = await axios.delete(url)
    return response.data
  },
  async Delete_Key(url, key) {
    const response = await axios.delete(url, key)
    return response.data
  },
}
