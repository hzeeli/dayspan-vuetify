import Vue from 'vue'
import Vuetify from 'vuetify'
import DaySpanVuetify from './plugin'
import App from './app'

import store from './store'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './styles/app.scss'

import zh from './locales/zh'
import en from './locales/en'

import 'moment/lang/fr'
import 'moment/lang/ca'
import 'moment/lang/nl'
import * as moment from 'moment'
moment.lang('zh')

Vue.config.productionTip = false

Vue.use(Vuetify);

Vue.use(DaySpanVuetify,
{
  data:
  {
    locales: { en, zh }
  },
  methods:
  {
    getDefaultEventColor()
    {
      return '#1976d2';
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
