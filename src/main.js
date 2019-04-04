import Vue from 'vue';
import '../node_modules/jquery/dist/jquery.slim.min';
import '../node_modules/popper.js/dist/popper.min';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import './assets/style/custom.scss';
import App from './App.vue';

// router
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
