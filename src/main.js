import { createApp } from 'vue'
import App from './App.vue'
import bmiForm from './components/bmiForm.vue'
import bmiResults from './components/bmiResults.vue'
import bmiDescription from './components/bmiDescription.vue'

import "bootstrap/dist/css/bootstrap.css";

//import "bootstrap/dist/js/bootstrap.js";
import "bootstrap";

const app = createApp(App);

app.component('bmi-form', bmiForm);
app.component('bmi-results', bmiResults);
app.component('bmi-description', bmiDescription);


app.mount('#app');

