<script setup>
import News1 from '../components/news/News1.vue'
</script>

<template>
  <section class="container">
    <News1 />
    <div class="font-line">
      <h1 class="title1 title">清</h1>
      <h2 class="title2 title">廉</h2>
      <div class="title-old">
        <span>公</span>
        <span>报</span>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.title1 {
  font-size: 22rem;
  position: absolute;
  top: 0;
  left: 0;
}
.title2 {
  position: absolute;
  font-size: 13rem;
  top: 23rem;
  left: 12rem;
}
.container {
  display: flex;
  height: calc(100vh - var(--header-height));
  justify-content: space-between;
  gap: 3rem;
  background-image: url('../assets/img/bg.png');
  background-size: 100% 100%;
  align-items: center;
}
.font-line {
  width: 24rem;
  display: flex;
  height: 100%;
  position: relative;
}
.title-old {
  border: 2px solid #000;
  padding: 0.25rem;
  font-family: SanFont;
  display: flex;
  font-size: 2rem;
  flex-direction: column;
  position: absolute;
  top: 28rem;
  left: 8rem;
  outline: 2px solid #000;
  outline-offset: 3px;
  background: rgba($color: #fff, $alpha: 0.8);
}
.container {
  padding: 2rem 4rem;
  padding-right: 6rem;
}
</style>
