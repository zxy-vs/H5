<template>
  <div class="app">
    <div class="nav">
      <router-link to="/Home">tb</router-link>|
      <router-link to="/drag">drag</router-link>|
      <router-link to="/login">login</router-link>|
      <router-link to="/drop">drop</router-link>|
      <router-link to="/files">files</router-link>|
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.nav {
  z-index: 2;
  width: 100vw;
  height: 80px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgba(135, 207, 235, 0.473);
  a {
    text-decoration: none;
    width: 60px;
    &.router-link-active {
      color: skyblue;
    }
  }
}
</style>
