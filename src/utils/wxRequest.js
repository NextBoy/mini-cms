import store from '../store'
const publicPath = 'http://192.168.0.166:3000/api'
export default function (config = {}) {
  const defaultConfig = {
    header: {
      'Authorization': store.state.token
    },
    method: 'GET'
  }
  config = Object.assign({}, defaultConfig, config)
  config.url = publicPath + config.url
  return new Promise((resolve, reject) => {
    wx.request({
      ...config,
      success (res) {
        resolve(res.data)
      },
      fail (res) {
        reject(res.data)
      },
      complete () {}
    })
  })
}
