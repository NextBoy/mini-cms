<template>
  <div>
    <div class="no-login" v-if="!userInfo.avatarUrl">
      <button open-type="getUserInfo"
              class="login-btn"
              @getuserinfo="onGetUserInfo">请先登录</button>
    </div>
    <div class="header-wrap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <p class="userinfo-nickname">{{ userInfo.nickName }}</p>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    onGetUserInfo (e) {
      console.log(e.mp)
      if (e.mp && e.mp.detail.userInfo) {
        this.userInfo = e.mp.detail.userInfo
        console.log('获取成功')
      }
    }
  }
}
</script>

<style scoped>
  .no-login {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .login-btn {
    width: 20vw;
    padding: 5px 10px;
    color: white;
    font-size: 32px;
    text-align: center;
    background-color: #FF1111;
  }
  .header-wrap {
    width: 100%;
    background-color: #FF1111;
    height: 35vh;
  }
  .userinfo-nickname {
    color: white;
  }
  .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
  }
</style>
