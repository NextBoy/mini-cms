export default function () {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.login({
            success (res) {
              const code = res.code
              wx.request({
                url: 'http://192.168.0.166:3000/api/users/wxLogin',
                data: {code},
                method: 'POST',
                success (res) {
                  console.log(res)
                  resolve(res.data)
                },
                fail (res) {
                  reject(res)
                }
              })
            },
            fail (res) {
              reject(res)
            }
          })
        }
      }
    })
  })
}
