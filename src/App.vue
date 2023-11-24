<script setup>
import Home from './pages/Home.vue'
import Top from './pages/Top.vue';
import HeaderNav from './components/HeaderNav.vue'
import Thess from './pages/Thess.vue'
import HomePage from './pages/HomePage.vue';
import SwiperContainer from './components/SwiperContainer.vue'
</script>

<template>
  
  <SwiperContainer>
    <!-- 新的页面只需要写到这里面就好了 -->
      <Home/>
      <Top/>
      <Thess/>
      <ProgressLine />
      <HeaderNav />
      <HomePage/>
  </SwiperContainer>

</template>

<style lang="scss" scoped>
.main {
  position: relative;
}
.bg {
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1;
  background-attachment: fixed;
  opacity: 0.3;
  background-size: cover;
}
</style>