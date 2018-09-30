<script>
  import ssoLogin from './utils/ssoLogin'
  export default {
    onLaunch () {
      ssoLogin()
        .then(res => {
          if (res.status) {
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
<style>
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  }
</style>
