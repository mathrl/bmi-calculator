<template>
  <header>
    <h1>{{ strings.title }}</h1>
    <button class="btn btn-secondary" @click="changeLang">change lang</button>
    <button class="btn btn-secondary" @click="changeDark">
      change dark mode
    </button>
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
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import strings from "./assets/strings.json";

export default {
  data() {
    return {
      isDarkMode: false,
      height: 1.8,
      weight: 80,

      browserLang: "",
      lang: "",
    };
  },

  computed: {
    strings() {
      if (this.browserLang === "en-US") {
        return strings.EN;
      }
      return strings.PT;
    },
  },

  created() {
    this.browserLang = window.navigator.language;

    this.isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (this.isDarkMode) $("body").addClass("dark");
  },

  methods: {
    updateBMI(height, weight) {
      this.height = height;
      this.weight = weight;
    },

    changeLang() {
      if (this.browserLang === "en-US") {
        this.browserLang = "pt-BR";
      } else if (this.browserLang === "pt-BR") {
        console.log("changed");
        this.browserLang = "en-US";
      }
    },

    changeDark() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) document.body.classList.add("dark");
      else document.body.classList.remove("dark");
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
  margin-top: 30px;
}

section > * {
  padding: 20px;
}
</style>
