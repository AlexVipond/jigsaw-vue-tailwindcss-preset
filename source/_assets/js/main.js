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
import PrimaryCallToAction from './components/PrimaryCallToAction.vue'
import SecondaryCallToAction from './components/SecondaryCallToAction.vue'


// Initialize app
let app = new Vue({
  el: "#app",
  data: {
    language: ''
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
  components: {
    ValueProposition,
    PrimaryCallToAction,
    SecondaryCallToAction,
    LanguageChanger
  },
  created () {
    this.language = computeLanguage(this.languages, this.defaultLanguage)
  }
});
