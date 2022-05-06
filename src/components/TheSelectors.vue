<template>
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
</template>

<script>
export default {
  emits: ["changeLang"],

  data() {
    return {
      browserLang: "",
      selectedLang: null,

      isDarkMode: false,
    };
  },

  created() {
    this.browserLang = window.navigator.language;
    this.browserLang == "en-US"
      ? (this.selectedLang = true)
      : (this.selectedLang = false);

    this.isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (this.isDarkMode) document.body.classList.add("dark");
  },

  watch: {
    isDarkMode() {
      if (this.isDarkMode) document.body.classList.add("dark");
      else document.body.classList.remove("dark");
    },

    selectedLang(newLang) {
        this.$emit("changeLang", newLang);
    }
  }
};
</script>

<style scoped lang="scss">
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
  justify-content: space-evenly;
  width: 35%;
  margin: 10px auto;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
  }
}

</style>
