<template>
  <section class="container">
    <h2>{{lang.desc_title}}</h2>
    <div v-html="lang.desc">
    
    </div>
  </section>
</template>

<script>
export default {
  props:['lang']
}
</script>

<style scoped>
h2,
p {
  margin-bottom: 5px;
}

h2 {
  font-size: 2rem;
}

section {
  margin-bottom: 10px;
}
</style>