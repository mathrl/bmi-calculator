<template>
  <input type="text" v-model="num1">
  <input type="text" v-model="num2">
  <input type="text" v-model="num3">
  <h2>{{sum}}</h2>


  <h3></h3>
</template>

<script>

export default {
  data() {
    return {
      num1: 0,
      num2: 0,
      num3: 0
    }
  },

  computed: {
    sum(){
      return +this.num1 + +this.num2 + +this.num3;
    }
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
