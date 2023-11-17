<!-- <script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import HelloWorld from './components/HelloWorld.vue'
import MyLink from './components/MyLink.vue'


gsap.registerPlugin(Draggable)
const de = ref(null)
console.log(de.value)
onMounted(() => {
  console.log(de.value)
  gsap.to(de.value, {
    rotation: 27,
    direction: 2
  })
  Draggable.create(de.value)
})
</script> -->

<script>
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
gsap.registerPlugin(Draggable)

export default {
  name: 'App',
  mounted() {
    gsap.to(this.$refs.de, {
      rotation: 27,
      direction: 2
    })
    Draggable.create(this.$refs.de)
  }
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" ref="de" v-for="ot in 20" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div class="btns">
    <button class="btn">
      Click
    </button>
    <div>
      <button class="btn">Hello</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.btns {
  display: flex;
  width: 100%;
  background: #e3e3e3;
  padding: 20px;
  gap: 12px;

  .btn {
    background: #000;
    color: white;
    padding: 8px 12px;
    border-radius: 12px;
  }
}
</style>
