// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Header from './components/Header'
import MainVisual from './components/MainVisual'
import Profile from './components/Profile'
import Work from './components/Work'
import VueParticles from 'vue-particles'
import jQuery from 'jquery'
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.config.productionTip = false

require('./assets/sass/main.scss')
Vue.use(VueParticles)

global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')

Vue.use(vueSmoothScroll)

/* eslint-disable no-new */
new Vue({
  el: '#header',
  components: { Header },
  template: '<Header/>'
})

new Vue({
  el: '#mv',
  components: { MainVisual },
  template: '<MainVisual/>'
})

new Vue({
  el: '#profile',
  components: { Profile },
  template: '<Profile/>'
})

new Vue({
  el: '#work',
  components: { Work },
  template: '<Work/>'
})
