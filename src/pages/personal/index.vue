<template>
  <div>
    <div class="header-wrap">
        <img class="userinfo-avatar"
             v-if="userInfo.avatarUrl"
             :src="userInfo.avatarUrl" background-size="cover" />
      <button open-type="getUserInfo"
              v-else
              class="login-btn"
              @getuserinfo="onGetUserInfo">请先登录</button>
      <p class="userinfo-nickname">{{ userInfo.nickName }}</p>
    </div>
  </div>
</template>

<script>
  import ssoLogin from '../../utils/ssoLogin'
export default {

  data () {
    return {
      userInfo: {}
    }
  },
  computed: {
    hasLogin () {
      return this.$store.state.hasLogin
    },
    token () {
      return this.$store.state.token
    }
  },
  onShow () {
    const that = this
    if (this.hasLogin) {
      wx.getUserInfo({
        success: (res) => {
          that.userInfo = res.userInfo
        }
      })
    }
  },
  methods: {
    onGetUserInfo (e) {
      const that = this
      if (e.mp && e.mp.detail.userInfo) {
        this.userInfo = e.mp.detail.userInfo
        ssoLogin()
          .then(res => {
            if (res.status) {
              wx.showToast({
                title: '登录成功'
              })
              that.$store.commit('setState', {
                hasLogin: true,
                token: res.info.token
              })
            }
          })
          .catch(err => {
            console.log(err)
          })
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
    color: white;
    font-size: 32px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
  }
  .header-wrap {
    width: 100%;
    background-color: #FF1111;
    height: 35vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .userinfo-nickname {
    color: white;
    margin: 0 auto;
  }
  .userinfo-avatar {
    margin: 0 auto;
    width: 128px;
    height: 128px;
    margin: 20px;
    border-radius: 50%;
  }
</style>
