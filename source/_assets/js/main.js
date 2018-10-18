// Import third-party libraries and components
import Vue from 'vue';

import Velocity from 'velocity-animate'

var PortalVue = require('portal-vue')
Vue.use(PortalVue)


// Import my Vue components and data
import computeLanguage from './scripts/compute-language.js'
import languageData from './data/languageData.json'
import LanguageChanger from './components/LanguageChanger.vue'

import ValueProposition from './components/ValueProposition.vue'
import CallToActionPrimary from './components/CallToActionPrimary.vue'
import CallToActionSecondary from './components/CallToActionSecondary.vue'


// Initialize app
let app = new Vue({
  components: {
    ValueProposition,
    CallToActionPrimary,
    CallToActionSecondary,
    LanguageChanger
  },
  el: "#app",
  data: {
    language: '',
    totalOpenModals: 0
  },
  computed: {
    defaultLanguage () {
      return languageData.defaultLanguage
    },
    languages () {
      return languageData.languages
    }
  },
  methods: {
    setLanguage (language) {
      this.language = language
    }
  },
  created () {
    this.language = computeLanguage(this.languages, this.defaultLanguage)
  },
  watch: {
    totalOpenModals () {
      if(this.totalOpenModals > 0) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    }
  }
});
