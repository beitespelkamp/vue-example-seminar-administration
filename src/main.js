// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Form from './components/Form'
import Table from './components/Table'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'form',
        component: Form
    },
    {
        path: '/registrations',
        name: 'registrations',
        component: Table
    },
];

const router = new VueRouter({
    routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App></App>'
});