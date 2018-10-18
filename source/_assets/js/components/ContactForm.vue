<template lang="html">
  <div class="flex flex-col w-full pt-6 pb-8 sm:pt-8 sm:pb-10 bg-white rounded-lg shadow-lg text-black">
    <!-- Toolbar -->
    <div class="relative flex px-8 mb-4 sm:mb-0">
      <div class="relative flex-1">
        <svg class="btn-grow cursor-pointer inline-block h-6 w-6 rounded-full text-primary stroke-current transition" @mouseover="infoTooltipOpen = true" @mouseout="infoTooltipOpen = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="8"></line>
        </svg>

        <portal-target name="contact-modal-info"></portal-target>
      </div>

      <div class="ml-auto">
        <svg class="cursor-pointer inline-block h-6 w-6 text-gray hover:text-gray-600 transition-fast stroke-current" @click="$emit('close')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    </div>

    <!-- Title -->
    <div class="flex items-center justify-center mb-8 px-8">
      <div class="text-center">
        <h2 class="mb-2 font-600 text-2xl">{{ messages[language].title }}</h2>
        <h3 class="font-400">{{ messages[language].subtitle }}</h3>
      </div>
    </div>

    <!-- Info tooltip -->
    <portal to="contact-modal-info">
      <info-tooltip class="w-full tracking-wide leading-tight"
      z-index="z-50"
      bg-color="bg-primary-500"
      text-color="text-primary-100"
      tooltip-arrow-border-color="border-primary"
      tooltip-arrow-position="top-left-top"
      icon-height="1.5rem"
      icon-width="1.5rem"
      :open="infoTooltipOpen"
      >
        <span class="" v-html="messages[language].info"></span>
      </info-tooltip>
    </portal>

    <!-- Contact form -->
    <form action="https://formspree.io/alex.r.vipond@gmail.com" method="POST"
    class="flex-1 px-8 overflow-scroll">
      <label class="block mb-4">
        <span class="block my-2 text-sm font-500">
          {{ messages[language].email }}:
        </span>
        <input
        type="email"
        name="email"
        class="block w-full px-3 py-1 rounded bg-gray-200 leading-normal text-black"
        placeholder="email@example.com"></input>
      </label>

      <label class="block mb-4">
        <span class="block my-2 text-sm font-500">
          {{ messages[language].subject }}:
        </span>
        <input
        type="text"
        name="_subject"
        class="block w-full px-3 py-1 rounded bg-gray-200 leading-normal text-black"
        :placeholder="messages[language].subject_placeholder"></input>
      </label>

      <span class="block my-2 text-sm font-500">
        {{ messages[language].message }}:
      </span>
      <textarea name="message" :placeholder="messages[language].message_placeholder"
      class="h-24 w-full px-3 py-3 rounded bg-gray-200 mb-4"></textarea>

      <button
      type="submit"
      class="btn btn-lift flex items-center w-full mb-4 bg-primary text-primary-100 transition">
        <svg class="inline-block h-4 w-4 mr-2 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        {{ messages[language].submit_form }}
      </button>

      <div class="text-sm text-gray-500">
        <p class="">
          {{ messages[language].not_sure }}
          <call-to-action-secondary
            class="text-primary no-underline hover:underline transition"
            :language="language"
            :first-letter-is-upper-case="false"
            :messages-replacement="{
              en: {
                call_to_action: messages.en.alternate_action
              },
              es: {
                call_to_action: messages.es.alternate_action
              }
            }"
            :show-icon-before-message="false"
            :show-icon-after-message="false">
          </call-to-action-secondary>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import InfoTooltip from '../components/InfoTooltip.vue'
import CallToActionSecondary from '../components/CallToActionSecondary.vue'

export default {
  components: {
    InfoTooltip,
    CallToActionSecondary
  },
  props: ['language'],
  data () {
    return {
      infoTooltipOpen: false,
      messages: {
        en: {
          title: 'Great choice!',
          subtitle: 'Fill out this nifty form:',
          info: '<p class="mb-2">I do freelance web design (in English and Spanish), so I\'d love to get in touch!</p>\
          <p>Let me know what you need a website for, and I\'ll get back to you as soon as possible.</p>',
          email: 'Email',
          subject: 'Subject line',
          subject_placeholder: 'Make me a website, please!',
          message: 'Message',
          message_placeholder: 'What\'s on your mind?',
          submit_form: 'Send message',
          not_sure: 'Not sure yet? You can ',
          alternate_action: 'learn more about this project, instead.'
        },
        es: {
          title: 'Bien elegido!',
          subtitle: 'Se puede llenar este formulario:',
          info: '<p class="mb-2">Yo diseño sitios web (en ingles y español), y me gustaría que nos pongamos en contacto!</p>\
          <p>Describa porque necesita sitio web, y le responderé a Ud. lo más pronto que sea posible.</p>',
          email: 'Correo electrónico',
          subject: 'Sujeto',
          subject_placeholder: 'Quiero un sitio web, por favor!',
          message: 'Mensaje',
          message_placeholder: 'Que está pensando?',
          submit_form: 'Enviar mensaje',
          not_sure: 'Aún no tiene certeza? También se puede,',
          alternate_action: 'aprender más sobre este proyecto.'
        }
      }
    }
  }
}
</script>
