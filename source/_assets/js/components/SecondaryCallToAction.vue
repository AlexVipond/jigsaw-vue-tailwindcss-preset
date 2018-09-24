<template>
  <div class="btn">
    <svg class="inline-block h-4 w-4 ml-auto stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>

    <span class="mx-2">{{ messages[language].call_to_action }}</span>
  </div>
</template>

<script>
import ModalBackground from '../components/ModalBackground.vue'

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
