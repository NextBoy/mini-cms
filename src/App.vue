<script>
  import ssoLogin from './utils/ssoLogin'
  export default {
    onLaunch () {
      ssoLogin()
        .then(res => {
          if (res.status) {
            wx.showToast({
              title: '登录成功'
            })
            this.$store.commit('setState', {
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
</script>
