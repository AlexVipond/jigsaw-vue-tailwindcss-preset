<template>
  <!-- @click="modalOpen = !modalOpen" -->
  <button class="btn">
    <svg class="inline-block h-4 w-4 mr-2 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>

    <span>{{ messages[language].call_to_action }}</span>

    <!-- <svg class="inline-block h-4 w-4 mr-2 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg> -->

    <!-- <portal to="modals">
      <modal-background z-index="z-40" :open="modalOpen" @close="modalOpen = false">
        <contact-form :language="language" :open="modalOpen" @close="modalOpen = false"></contact-form>
      </modal-background>
    </portal> -->
  </button>
</template>

<script>
// import ModalBackground from '../components/ModalBackground.vue'
// import ContactForm from '../components/ContactForm.vue'

export default {
  props: ['language'],
  components: {
    // ModalBackground,
    // ContactForm,
  },
  data () {
    return {
      modalOpen: false,
      messages: {
        en: {
          call_to_action: 'Fork repository'
        },
        es: {
          call_to_action: 'Fork el repositorio'
        }
      }
    }
  }
}
</script>
