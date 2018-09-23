<template>
  <div class="btn btn-lg btn-secondary" :class="[bgColor, textColor,  borderWidth, borderColor]">
    <svg class="inline-block h-4 w-4 ml-auto stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
    </svg>

    <span class="mx-2">{{ messages[language].call_to_action }}</span>
  </div>
</template>

<script>

export default {
  props: ['language', 'bgColor', 'textColor', 'borderWidth', 'borderColor'],
  data () {
    return {
      messages: {
        en: {
          call_to_action: 'See our work'
        },
        es: {
          call_to_action: 'Ver nuestras obras'
        },
        pt: {
          call_to_action: 'Ver nossas obras'
        }
      }
    }
  }
}
</script>
