<template>
<div id="app">
  <sidebar></sidebar>
  <pad></pad>
</div>
</template>

<script>
import Pad from './components/Pad'
import Sidebar from './components/Sidebar'

export default {
  name: 'App',
  components: {
    Pad,
    Sidebar
  }
}

</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    height: 100%;
  }

</style>
