import Vue from 'vue'
import App from './App.vue'
import { MdField, MdButton, MdList, MdCheckbox } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(MdField);
Vue.use(MdButton);
Vue.use(MdList);
Vue.use(MdCheckbox);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
