
<script setup>
import Download from '../components/svg/Download.vue';
</script>


<template>
    <!-- 这里是第一个页面 -->
    <div class="container home-bg">

        <div class="nali_sytel">
            <h1 class="animate__animated animate__backInLeft font_siez">以清为美</h1>
            <h1 class="animate__animated animate__backInLeft font_siez" style="color: black;">以廉为荣</h1>
        </div>
        <h3>滚动鼠标滚轮</h3>
        <Download />
    </div>
</template>
<style scoped>
.home-bg {
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/img/水彩渐变绿色ppt背景_1700385645824.png');
    background-size: 100% 100%;
    display: flex;
    flex-direction: column
}

.nali_sytel {
    width: 100vw;
    height: 78vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.font_siez {
    color: #fff;
    font-size: 100px;
    font-family: 华文新魏;
}
h3{
    display: flex;
    color: #fff;
    justify-content: center;
}
</style>