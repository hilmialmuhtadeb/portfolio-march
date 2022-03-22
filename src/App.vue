<template>
  <div id="app">
    <navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
@import './assets/_shared.scss';
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
  max-width: 80%;
  margin: auto;
  padding: 2em 8em;
}

@media screen and (max-width: 1440px) {
  #app {
    max-width: 100%;
  }
}

@media screen and (max-width: 1080px) {
  #app {
    padding: 2em 4em;
  }
}

@media screen and (max-width: 768px) {
  #app {
    padding: 2em 1em;
  }
}
</style>
