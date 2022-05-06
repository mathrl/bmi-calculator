<template>
  <section>
    <h2>{{lang.desc_title}}</h2>
    <p>
      BMI, formerly called the Quetelet index, is a measure for indicating
      nutritional status in adults. It is defined as a person’s weight in
      kilograms divided by the square of the person’s height in metres (kg/m2).
      For example, an adult who weighs 70 kg and whose height is 1.75 m will
      have a BMI of 22.9.
    </p>
    <p>
      The BMI ranges are based on the effect excessive body fat has on disease
      and death and are reasonably well related to adiposity. BMI was developed
      as a risk indicator of disease; as BMI increases, so does the risk for
      some diseases. Some common conditions related to overweight and obesity
      include: premature death, cardiovascular diseases, high blood pressure,
      osteoarthritis, some cancers and diabetes.
    </p>

    <p>
      BMI is also recommended for use in children and adolescents. In children,
      BMI is calculated as for adults and then compared with z-scores or
      percentiles. During childhood and adolescence the ratio between weight and
      height varies with sex and age, so the cut-off values that determine the
      nutritional status of those aged 0–19 years are gender- and age-specific.
      The cut-off points of the 2006 BMI-for-age reference for children aged 0–5
      years for the diagnosis of overweight and obesity were set as the 97th and
      the 99th percentile, respectively. For those aged 5–19 years, overweight
      is defined as a BMI-for-age value over +1 SD and obesity as a BMI-for-age
      value over +2 SD.
    </p>

    <p><a href="https://www.euro.who.int/en/health-topics/disease-prevention/nutrition/a-healthy-lifestyle/body-mass-index-bmi">Source</a></p>
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