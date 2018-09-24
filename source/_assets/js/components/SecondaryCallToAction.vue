<template>
  <!-- @click="modalOpen = !modalOpen" -->
  <button class="btn">
    <svg class="inline-block h-4 w-4 mr-2 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
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

export default {
  components: {
    // ModalBackground,
  },
  props: ['language'],
  data () {
    return {
      messages: {
        en: {
          call_to_action: 'Learn more'
        },
        es: {
          call_to_action: 'Aprender más'
        }
      }
    }
  }
}
</script>
