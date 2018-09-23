<template lang="html">
  <div class="flex flex-col max-h-full max-w-sm w-screen pt-8 bg-white rounded-lg shadow-lg text-black">
    <!-- Toolbar -->
    <div class="relative flex px-8">
      <div class="relative flex-1">
        <svg class="cursor-pointer inline-block h-6 w-6 text-primary hover:scale-110 active:scale-100 stroke-current transition" @mouseover="infoDropdownOpen = true" @mouseout="infoDropdownOpen = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="8"></line>
        </svg>

        <portal-target name="contact-modal-info"></portal-target>
      </div>

      <div class="ml-auto">
        <svg class="cursor-pointer inline-block h-6 w-6 text-grey hover:text-grey-darker transition-fast stroke-current" @click="$emit('close')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    </div>

    <!-- Title -->
    <div class="flex items-center justify-center mb-8 px-8">
      <div class="text-center">
        <h2 class="mb-2 font-bold text-2xl">{{ messages[language].title }}</h2>
        <h3 class="font-normal">{{ messages[language].subtitle }}</h3>
      </div>
    </div>

    <!-- Info dropdown -->
    <portal to="contact-modal-info">
      <!-- <info-dropdown class="w-full tracking-wide leading-tight"
      z-index="z-50"
      bg-color="bg-primary"
      text-color="text-primary-lightest"
      dropdown-arrow-border-color="border-primary"
      dropdown-arrow-position="top-left-top"
      icon-height="1.5rem"
      icon-width="1.5rem"
      :open="infoDropdownOpen"
      >
      </info-dropdown> -->
    </portal>

    <!-- Contact form -->
    <div class="flex-1 px-8 pb-8">
      <div class="flex flex-col sm:flex-row items-center mb-8">
        <a
        class="btn flex items-center w-full mb-4 sm:mb-0 sm:mr-3 bg-primary-dark text-primary-lightest font-bold tracking-loose"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener"
        >
          <svg class="inline-block h-4 w-4 mr-2 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          {{ messages[language].email }}
        </a>

        <a
        class="btn flex items-center w-full sm:ml-3 bg-primary-dark text-primary-lightest font-bold tracking-loose"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener"
        >
          <svg class="inline-block h-4 w-4 mr-2 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          {{ messages[language].call }}
        </a>
      </div>

      <div class="text-sm text-grey-dark">
        <p class="mb-2">
          {{ messages[language].not_sure }}
          <a
          class="text-primary-light no-underline hover:underline transition"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener"
          >
            {{ messages[language].alternate_action }}</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import InfoDropdown from '../components/InfoDropdown.vue'

export default {
  components: {
    InfoDropdown
  },
  props: ['language', 'open'],
  data () {
    return {
      messages: {
        en: {
          title: 'Let\'s get in touch!',
          subtitle: 'You can use this form.',
          email: 'Email us',
          call: 'Call us',
          not_sure: 'Not sure yet? You can also ',
          alternate_action: 'take this alternate action'
        },
        es: {
          title: 'Pongamonos en contacto!',
          subtitle: 'Le invitamos a enviar correo electrónico o llamar.',
          email: 'Enviar correo',
          call: 'Llamar',
          not_sure: 'Aún no tiene certeza? También se puede,',
          instagram: 'tomar esta acción alternativa'
        }
      }
    }
  }
}
</script>
