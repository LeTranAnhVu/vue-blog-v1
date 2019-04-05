import Vue from 'vue';

import './assets/js/vendor';
import './assets/style/custom.scss';
import App from './App.vue';

// router
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
