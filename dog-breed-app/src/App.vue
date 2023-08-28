<template>
  <img alt="Vue logo" src="./assets/dog-api-logo.svg">
 
  <BreedList msg="List of Breeds"/>
  <BreedImages msg="Images of Breeds"/>
</template>

<script>
import BreedList from './components/BreedList.vue'
import BreedImages from './components/BreedImages.vue'

export default {
  name: 'App',
  components: {
    BreedList,
    BreedImages
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
