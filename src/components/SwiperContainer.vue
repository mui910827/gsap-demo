<script setup>
import { onMounted, ref } from 'vue'
import useScroll from '../composables/useScroll';
const scroll = ref()
// max 是最大页数，不过是从 0 开始数，如果最大有5页，应该给 4
useScroll(scroll,{
    max:3,
    initPage:0
})

</script>

<template>
    <div class="swiper-container  container">
        <div class="container" ref="scroll">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.swiper-container {
    overflow: hidden;
  }
</style>