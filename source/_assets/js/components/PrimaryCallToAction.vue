<template>
  <div @click="modalOpen = !modalOpen">
    <svg
      v-if="showIconBeforeMessage"
      class="inline-block h-4 w-4 mr-2 stroke-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>

    <span>{{ messages[language].call_to_action }}</span>

    <svg
      v-if="showIconAfterMessage"
      class="inline-block h-4 w-4 ml-2 stroke-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>

    <portal to="modals">
      <modal-background
      z-index="z-50"
      :open="modalOpen"
      content-max-width="max-w-sm"
      close-event="close-primary-cta"
      @close-primary-cta="modalOpen = false">
        <contact-form :language="language" :open="modalOpen" @close="modalOpen = false"></contact-form>
      </modal-background>
    </portal>
  </div>
</template>

<script>
import ModalBackground from '../components/ModalBackground.vue'
import ContactForm from '../components/ContactForm.vue'

export default {
  components: {
    ModalBackground,
    ContactForm,
  },
  props: ['language', 'messagesReplacement', 'firstLetterIsUpperCase', 'showIconBeforeMessage', 'showIconAfterMessage'],
  data () {
    return {
      modalOpen: false,
      messages: {
        en: {
          call_to_action: 'Request a website'
        },
        es: {
          call_to_action: 'Solicitar sitio web'
        }
      }
    }
  },
  methods: {
    upperCaseFirstLetter (str) {
      return str[0].toUpperCase() + str.slice(1)
    },
    lowerCaseFirstLetter (str) {
      return str[0].toLowerCase() + str.slice(1)
    },
    replaceMessages(messagesReplacement) {
      this.messages = messagesReplacement
    }
  },
  created () {
    // replace message
    if(this.messagesReplacement) {
      this.replaceMessages(this.messagesReplacement)
    }

    // uppercase message
    var language, message
    if(this.firstLetterIsUpperCase) {
      for (language in this.messages) {
        for (message in this.messages[language]) {
          this.messages[language][message] = this.upperCaseFirstLetter(this.messages[language][message])
        }
      }
    } else {
      for (language in this.messages) {
        for (message in this.messages[language]) {
          this.messages[language][message] = this.lowerCaseFirstLetter(this.messages[language][message])
        }
      }
    }
  }
}
</script>
