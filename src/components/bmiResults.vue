<template>
  <div class="result-wrapper">
    <h3 class="result-number">
      {{this.lang.result}} <b>{{ bmi }}</b> kg/m2
    </h3>

    <div class="result-name">
      <div
        class="color-indicator"
        :style="{ 'background-color': state_color }"
      ></div>

      <div class="status-title">
        <h3>{{ bmi_status }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["weight", "height", "lang"],

  data() {
    return {
      bmi_breakpoints: [18.5, 24.9, 29.9, 34.9, 39.9],
      bmi_breakpoints_names: [
        "Underweight",
        "Normal weight",
        "Pre-obesity",
        "Obesity class I",
        "Obesity class II",
        "Obesity class III",
      ],
    };
  },

  computed: {
    bmi() {
      let bmi = +this.weight / Math.pow(+this.height, 2);


      return bmi.toFixed(2);
    },

    bmi_status() {
      let j;
      for (let i = 0; i < this.bmi_breakpoints.length; i++) {
        j = i + 1;
        if (this.bmi > this.bmi_breakpoints[i]) {
          continue;
        } else {
          j = i;
          break;
        }
      }
      return this.bmi_breakpoints_names[j];
    },

    state_color() {
      let bbn = this.bmi_breakpoints_names;
      switch (this.bmi_status) {
        case bbn[0]:
          return "#aa1111";
        case bbn[1]:
          return "#138c1f";
        case bbn[2]:
          return "#cebf16";
        case bbn[3]:
          return "#aa3c11";
        case bbn[4]:
          return "#aa1111";
        case bbn[5]:
          return "#9b0404";
      }

      return "#009933";
    },
  },
};
</script>

<style lang="scss" scoped>
div.result-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 20%;
}

@media all and (max-width: 716px) {
  div.result-wrapper {
  max-width: 90%;
}
}

h3.result-number {
    text-align: center;
    margin-bottom: 7px;

  margin-bottom: 15px;
}

b {
  font-weight: bold;
}

div.result-name {
  .color-indicator {
    display: inline-block;
    vertical-align: middle;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    transition: 0.7s ease background-color;
    margin-right: 6px;
  }

  .status-title {
    display: inline-block;
    vertical-align: middle;

    h3 {
      font-weight: bold;
    }
  }
}
</style>