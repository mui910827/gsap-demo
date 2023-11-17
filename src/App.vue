<script setup>
import {ref,onMounted} from 'vue'
import {gsap} from 'gsap'
import {Draggable} from 'gsap/Draggable'
import HelloWorld from './components/HelloWorld.vue'
import MyLink from './components/MyLink.vue'


gsap.registerPlugin(Draggable)
const de = ref(null)
console.log(de.value)
onMounted(()=>{
  console.log(de.value)
  gsap.to(de.value,{
    rotation:27,
    direction:2
  })
  Draggable.create(de.value)
})
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank"  >
      <img src="/vite.svg" class="logo" alt="Vite logo" ref="de" v-for="ot in 20" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo"/>
    </a>
  </div>
  <MyLink v-for="item in 90"/>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
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
</style>
