import wxRequest from '../utils/wxRequest'
export default {
  // 存储更新用户信息
  saveUserInfo (data){
    const config = {
      method: 'POST',
      url: '/users/saveWxUserInfo',
      data
    }
    return wxRequest(config)
  }
}
