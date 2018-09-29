export default function () {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.login({
            success (res) {
              const code = res.code
              wx.request({
                url: 'http://127.0.0.1:3000/api/users/wxLogin',
                data: {code},
                method: 'POST',
                success (res) {
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
        } else {
          wx.showToast({title: '用户未授权'})
        }
      }
    })
  })
}
