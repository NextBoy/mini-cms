<template>
  <div class="wrap">
    <div class="right">
      <h2>{{ data.title }}</h2>
      <div class="article-info">
        <p class="date">{{ data.date }}</p>
        <p class="read">热度：{{ data.readNum }}</p>
        <p class="region">{{ data.region }}</p>
      </div>
    </div>
    <div class="left">
      <img :src="data.img || defaultImg">
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
      defaultImg: 'http://placehold.it/100x100'
    }
  }
}
</script>

<style  scoped>
.wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 180px;
  /*border-bottom: 1px solid #e9ecf5;*/
  box-sizing: border-box;
  padding: 0 24px;
}
  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
  }
  .left img {
    width: 140px;
    height: 100px;
    border-radius: 12px;
  }
  .right {
    flex: 1;
  }
  .article-info {
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  h2 {
    padding-right: 44px;
    font-size: 32px;
    color: black;
    line-height: 1.4;
  }
  .date {
    text-align: left;
    width: 33%;
    color: #9d9da5;
    font-size: 24px;
  }
  .read {
    text-align: left;
    width: 33%;
    color: #9d9da5;
    font-size: 24px;
  }
  .region {
    text-align: left;
    width: 33%;
    color: #9d9da5;
    font-size: 24px;
  }
</style>
