/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router'

import router from './router'

import HeaderComponent from './components/HeaderComponent';

window.Vue = Vue;
Vue.use(VueRouter);

Vue.component('header-component', HeaderComponent);

const app = new Vue({
    el: '#app',
    router
});
