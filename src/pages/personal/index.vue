<template>
  <div>
    <div v-if="hasLogin" class="header-wrap">
      <img class="userinfo-avatar"
           v-if="hasLogin"
           :src="userInfo.avatarUrl" background-size="cover"/>
      <p class="userinfo-nickname">{{ userInfo.nickName }}</p>
    </div>
    <div class="header-wrap" v-else>
      <img class="userinfo-avatar"
           src="../../../static/images/white-head.png" background-size="cover"/>
      <button open-type="getUserInfo"
              class="login-btn"
              @getuserinfo="onGetUserInfo">未登录，点击登录
      </button>
    </div>
    <div>
      <div v-if="!hasLogin" class="collect">
        <p class="state">点击登录，查看你的收藏列表</p>
      </div>
    </div>
  </div>
</template>

<script>
  import ssoLogin from '../../utils/ssoLogin'

  export default {

    data() {
      return {
      }
    },
    computed: {
      hasLogin() {
        return this.$store.state.hasLogin
      },
      token() {
        return this.$store.state.token
      },
      userInfo() {
        return this.$store.state.userInfo
      }
    },
    onShow() {
      const that = this
      if (this.hasLogin) {
        if (!Object.keys(this.userInfo).length) {
          wx.getUserInfo({
            success: (res) => {
              const userInfo = res.userInfo
              that.$store.commit('setState', {userInfo})
              console.log(res)
              const { encryptedData, iv } = res
              this.$api.users.saveUserInfo({
                encryptedData, iv
              })
            }
          })
        }
      }
    },
    methods: {
      onGetUserInfo(e) {
        const that = this
        if (e.mp && e.mp.detail.userInfo) {
          const userInfo = e.mp.detail.userInfo
          that.$store.commit('setState', {userInfo})
          console.log(e.mp.detail)
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
                const { encryptedData, iv } = e.mp.detail
                this.$api.users.saveUserInfo({
                  encryptedData, iv
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
    padding: 0 5px;
  }

  .header-wrap {
    width: 100%;
    background-color: #0099FF;
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
  .collect {
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .collect .empty-img {
    width: 100px;
  }
  .collect .state {
    color: #AEAEBD;
    font-size: 28px;
  }
</style>
