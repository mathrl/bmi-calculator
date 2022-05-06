<template>
  <header>
    <h1>{{ strings.title }}</h1>

    <TheSelectors @changeLang="changeLang" />
  </header>
  
  <main>
    <section class="input-and-result">
      <bmi-form @update-bmi="updateBMI" :lang="strings"> </bmi-form>
      <bmi-results
        :weight="weight"
        :height="height"
        :lang="strings"
      ></bmi-results>
    </section>

    <bmi-description :lang="strings"></bmi-description>
  </main>
</template>

<script>
import strings from "./assets/strings.json";
import TheSelectors from "./components/TheSelectors.vue";

export default {
  components: {
    TheSelectors,
  },

  data() {
    return {
      isDarkMode: false,
      height: 1.8,
      weight: 80,
      browserLang: "",
      selectedLang: null,
      lang: "",
    };
  },
  computed: {
    strings() {
      if (this.selectedLang) {
        return strings.EN;
      }
      return strings.PT;
    },
  },

  methods: {
    updateBMI(height, weight) {
      this.height = height;
      this.weight = weight;
    },

    changeLang(newLang) {
      this.selectedLang = newLang;
    },
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 15px;
  font-weight: 500;
}

body {
  color: rgb(32, 32, 32);
  transition: 0.2s all;
}

.container {
  max-width: 1000px !important;
}

.dark {
  background-color: #141414;
  color: #ebebeb;
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
  margin-bottom: 15px;
}

section.input-and-result {
  border-radius: 10px;
  margin-top: 15px;
}

section > * {
  padding: 20px;
}
</style>
