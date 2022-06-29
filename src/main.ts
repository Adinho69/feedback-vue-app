import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import PageLoading from './components/PageLoading.vue';
Vue.config.productionTip = false;
Vue.component('PageLoading', PageLoading);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
