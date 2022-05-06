<template>
  <header>
    <h1>{{ strings.title }}</h1>

    <div id="selectors">
      <div>
        <span>🇧🇷</span>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            v-model="selectedLang"
          />
        </div>
        <span>🇺🇸</span>
      </div>

      <div>
        <i class="fa-solid fa-sun"></i>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            v-model="isDarkMode"
          />
        </div>
        <i class="fa-solid fa-moon"></i>
      </div>
    </div>
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

    <!--<bmi-results :weight="weight" :height="height"></bmi-results>-->
  </main>
</template>

<script>
// import $ from "jquery";

import "bootstrap";
import strings from "./assets/strings.json";

export default {
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

  watch: {
    isDarkMode() {
      if (this.isDarkMode) document.body.classList.add("dark");
      else document.body.classList.remove("dark");
    },
  },

  created() {
    this.browserLang = window.navigator.language;

    this.browserLang == "en-US"
      ? (this.selectedLang = true)
      : (this.selectedLang = false);

    this.isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (this.isDarkMode) document.body.classList.add("dark");
  },

  methods: {
    updateBMI(height, weight) {
      this.height = height;
      this.weight = weight;
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
}

body {
  color: rgb(32, 32, 32);
  transition: 0.2s all;
}

.dark {
  background-color: #141414;
  color: #ebebeb;
}
</style>

<style lang="scss" scoped>
.form-check {
  display: inline-block;
  margin: 0;
}

.form-switch {
  padding-left: 0;
}

.form-switch .form-check-input {
  margin: 0 5px;
}

div#selectors {
  display: flex;
  align-items: center;
  justify-content:space-evenly;
  width: 35%;
  margin:0 auto;

  div {
    display: flex;
    align-items: center;
  }
}

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
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  padding: 20px;
  margin-top: 15px;
}

section > * {
  padding: 20px;
}
</style>
