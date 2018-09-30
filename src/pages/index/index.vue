<template>
  <div class="container">
    <h1>资讯列表</h1>
    <div v-for="(item, index) in list">
      <card :data="item" :key="index"></card>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      list: []
    }
  },

  components: {
    card
  },
  onLoad () {
    for (let i = 0; i < 15; i++) {
      this.list.push(this.mockData())
    }
  },
  onPullDownRefresh () {
    wx.showNavigationBarLoading()
    setTimeout(() => {
      this.list = []
        for (let i = 0; i < 15; i++) {
          this.list.push(this.mockData())
        }
        wx.stopPullDownRefresh({})
        wx.hideNavigationBarLoading()
      },
      1000)
  },
  onReachBottom () {
    for (let i = 0; i < 15; i++) {
      this.list.push(this.mockData())
    }
  },
  methods: {
    mockData () {
      return {
        id: Math.random(),
        img: 'https://oola-oss.oss-cn-shenzhen.aliyuncs.com/oola-oss/imgs/20180921/20180921180535824Ecj.jpg',
        title: '你黯淡无光的旧物，却是山区留守儿童的一抹色彩',
        date: '2018-10-01',
        readNum: Math.floor(Math.random() * 1000),
        region: Math.floor(Math.random() * 11232341215)
      }
    }
  }
}
</script>
<style scoped>
  h1 {
    color: #0099FF;
    font-size: 34px;
    text-align: center;
    margin-top: 24px;
    padding: 8px;
  }
</style>
