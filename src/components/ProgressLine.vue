<template>
  <ul class="progress-container">
    <li>
      <a href="#">公报头条</a>
    </li>
    <li>
      <a href="#poetry">诗文</a>
    </li>
    <li>
      <a href="#">公报头条</a>
    </li>
    <li>
      <a href="#">公报头条</a>
    </li>
    <li>
      <a href="#">公报头条</a>
    </li>
  </ul>
</template>
<style scoped lang="scss">
.progress-container {
  font-family: SanFont;
  position: fixed;
  height: calc(100vh - var(--header-height) - 5rem);
  right: 2rem;
  top: 7.5rem;
  display: flex;
  z-index: 99;
  flex-direction: column;
  justify-content: space-between;
  color: #afafaf;
  text-align: right;
  list-style: none;
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    background: #000;
    right: -1rem;
    top: 0;
  }
}
</style>
