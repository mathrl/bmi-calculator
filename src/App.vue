<template>
<header>
  <h1>BMI Calculator</h1>
</header>
  <main>
    <section class="input-and-result">
      <bmi-form @update-bmi="updateBMI"></bmi-form>
      <bmi-results :weight="weight" :height="height"></bmi-results>
    </section>

    <bmi-description></bmi-description>

    <bmi-results :weight="weight" :height="height"></bmi-results>
  </main>
</template>

<script>
export default {
  data() {
    return {
      height: 1.8,
      weight: 80,
    };
  },

  methods: {
    updateBMI(height, weight) {
      this.height = height;
      this.weight = weight;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  color: rgb(240, 240, 240);
}

body {
  background-color: #141414;
}
</style>

<style lang="scss" scoped>

$width: 90%;

header {
  width: $width;
  margin: 0 auto;
  text-align: center;
  padding-top: 30px;
}
h1 {
  font-weight: bold;
  font-size: 3rem;
}
section {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: $width;
  margin: 0 auto;
  
}

section.input-and-result {
  border: 1px solid rgb(230, 230, 230);
    border-radius: 10px;
    padding: 20px;
    margin-top: 30px;
}

section > * {
  padding: 20px;
}
</style>
