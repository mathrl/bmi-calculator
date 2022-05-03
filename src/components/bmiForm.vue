<template>
  <div class="form-wrapper">
    <!-- seletor peso -->
    <div class="bmi-input">
      <div class="unit-selector-wrapper">
        <label for="weight">Weight: </label>
        <div class="unit-selector">
          <input
            type="radio"
            id="kg"
            name="w-unit"
            @input="setUnits('weight', true, isM)"
            checked
          />
          <label for="kg">kg</label>
          <input
            type="radio"
            id="lb"
            @input="setUnits('weight', false, isM)"
            name="w-unit"
          />
          <label for="lb">lb</label>
        </div>
      </div>

      <input
        id="weight"
        v-model="input_weight"
        @input="updateBMI"
      />
    </div>

    <!-- seletor altura -->
    <div class="bmi-input">
      <div class="unit-selector-wrapper">
        <label for="height">Height: </label>
        <div class="unit-selector">
          <input
            type="radio"
            id="m"
            @input="setUnits('height', isKg, true)"
            name="h-unit"
            checked
          />
          <label for="m">m</label>
          <input
            type="radio"
            id="ft"
            @input="setUnits('height', isKg, false)"
            name="h-unit"
          />
          <label for="ft">ft</label>
        </div>
      </div>

      <input
        id="height"
        v-model="input_height"
        @input="updateBMI"
      />
    </div>
  </div>
</template>

<script>
export default {
  emits: ["update-bmi"],
  data() {
    return {
      input_weight: 80,
      input_height: 1.80,
      input_gender: "m",
      isKg: true,
      isM: true,
    };
  },

  computed: {
    converted_weight() {
      if (!this.isKg) {
        return this.input_weight / 2.2;
      }

      return this.input_weight;
    },

    converted_height() {
      if (!this.isM) {
        return this.input_height / 3.28;
      }

      return this.input_height;
    },
  },

  methods: {
    updateBMI() {
      this.$emit("update-bmi", this.converted_height, this.converted_weight);
    },

    // define as unidades sendo trabalhadas se o usuário trocar, e converte no campo do input
    setUnits(type, kg, m) {
      this.isKg = kg;
      this.isM = m;
      if (type == "weight") {
        if (kg) {
          this.input_weight = (this.input_weight / 2.2).toFixed(2);
        } else {
          this.input_weight = (this.input_weight * 2.2).toFixed(2);
        }
      } else if (type == "height") {
        if (m) {
          this.input_height = (this.input_height / 3.28).toFixed(2);
        } else {
          this.input_height = (this.input_height * 3.28).toFixed(2);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
div.bmi-input {
  margin-bottom: 30px;
  input {
    padding: 20px;
    border: 1px solid rgb(143, 143, 143);
    border-radius: 10px;
    font-size: 20px;
    color: #141414;
  }
}

div.unit-selector {
  display: inline;

  label {
    margin-right: 8px;
     cursor: pointer;
  }
  input {
    margin-right: 2px;
  }
}

label {
  display: inline-block;
  font-size: 20px;
  margin-bottom: 5px;
  margin-right: 9px;
 
}

$color1: #f4f4f4;
$color2: #3197EE;
input[type="radio"] {
    position: absolute;
    opacity: 0;
    + label {
      &:before {
        content: '';
        background: $color1;
        border-radius: 100%;
        border: 1px solid darken($color1, 25%);
        display: inline-block;
        width: 0.8em;
        height: 0.8em;
        position: relative;
        margin-right: 2px; 
        cursor: pointer;
        text-align: center;
        transition: background-color .25s ease;
      }
    }
    &:checked {
      + label {
        &:before {
          background-color: $color2;
          box-shadow: inset 0 0 0 4px $color1;
        }
      }
    }
    &:focus {
      + label {
        &:before {
          outline: none;
          border-color: $color2;
        }
      }
    }
    &:disabled {
      + .radio-label {
        &:before {
          box-shadow: inset 0 0 0 4px $color1;
          border-color: darken($color1, 25%);
          background: darken($color1, 25%);
        }
      }
    }
    + label {
      &:empty {
        &:before {
          margin-right: 0;
        }
      }
    }
  }
</style>