<template>
  <div id="app">
    <ChatWindow/>
  </div>
</template>

<script>
import ChatWindow from './components/ChatWindow.vue'

export default {
  name: 'app',
  components: {
    ChatWindow
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
