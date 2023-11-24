<template>
  <div class="news-1">
    <div>
      <h1 class="title">我们总说清廉，清廉是什么呢？是为了什么?</h1>
    </div>
    <div class="warp">
      <iframe
        class="voide"
        src="//player.bilibili.com/player.html?aid=976385550&bvid=BV1g44y1i7f3&cid=435440341&p=1"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
      >
      </iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news-1 {
  border: 1px solid #000;
  flex: 1;
  height: 100%;
  position: relative;
  padding: 1.5rem;
}
.cover {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  left: 0;
  top: 0;
  background: #fff;
  padding: 1.5rem;
}
.voide {
  width: 100%;
  height: 550px;
  outline: 1px solid #000;
}
.warp {
  height: 100%;
}
</style>
