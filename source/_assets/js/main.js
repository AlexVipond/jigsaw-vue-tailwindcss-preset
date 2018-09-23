// Import third-party libraries and components
import Vue from 'vue';

import Velocity from 'velocity-animate'

var PortalVue = require('portal-vue')
Vue.use(PortalVue)


// Import my Vue components
import ValueProposition from './components/ValueProposition.vue'
import PrimaryCallToAction from './components/PrimaryCallToAction.vue'
import SecondaryCallToAction from './components/SecondaryCallToAction.vue'
import LanguageSetter from './components/LanguageSetter.vue'


// Initialize app
let app = new Vue({
  el: "#app",
  data: {
    language: 'en',
    languageSetterOpen: false,
    messages: {
      en: {
        primary_call_to_action: 'Click here!',
        secondary_call_to_action: '(Or here)'
      },
      es: {
        primary_call_to_action: 'Haga click aqui!',
        secondary_call_to_action: '(O aqui)'
      }
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
    LanguageSetter
  }
});
