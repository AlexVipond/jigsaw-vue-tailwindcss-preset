<template>
  <button class="btn"
  @click="modalOpen = !modalOpen"
  >
    <svg class="inline-block h-4 w-4 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>

    <span class="mx-2">{{ messages[language].call_to_action }}</span>

    <portal to="modals">
      <modal-overlay z-index="z-40" :open="modalOpen" @close="modalOpen = false">
        <contact-form :language="language" :open="modalOpen" @close="modalOpen = false"></contact-form>
      </modal-overlay>
    </portal>
  </button>
</template>

<script>
import ModalOverlay from '../components/ModalOverlay.vue'
import ContactForm from '../components/ContactForm.vue'

export default {
  props: ['language'],
  components: {
    ModalOverlay,
    ContactForm
  },
  data () {
    return {
      modalOpen: false,
      messages: {
        en: {
          call_to_action: 'Contact Prostairs'
        },
        es: {
          call_to_action: 'Contactar Prostairs'
        },
        pt: {
          call_to_action: 'Contactar Prostairs'
        }
      }
    }
  }
}
</script>
