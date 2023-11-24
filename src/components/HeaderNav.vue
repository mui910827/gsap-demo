<template>
  <header class="header">
    <nav class="nav">
      <h1 class="logo red-title">清廉</h1>
      <h1 class="logo">校园</h1>
      <h1 class="logo">公报</h1>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100vw;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  border-bottom: 1px solid #000;
  padding: 0 5rem;
  &::after {
    z-index: -1;
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-image: url('../assets/img/bg.png') !important;
    background-attachment: fixed;
  }
}
.nav {
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.logo {
  font-size: 2rem;
  font-family: SanFont;
}

.red-title {
  background: red;
  color: white;
  padding: 0 0.5rem;
}
</style>
