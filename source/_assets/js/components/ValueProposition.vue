<template>
  <div class="">
    <div class="text-xl md:text-2xl font-600 text-primary-gray-200 text-shadow">
      <h3 class="block mb-2">{{ messages[language].value_secondary }}.</h3>
      <h3 class="block">{{ messages[language].value_tertiary }}.</h3>
    </div>

    <h2 class="inline-block mt-4 mb-12 p-1 font-600 text-4xl md:text-5xl leading-none text-primary-100 text-shadow">{{ messages[language].value_primary }}.</h2>

    <p class="mb-12 text-xl md:text-2xl leading-normal text-primary-gray-200 text-shadow"
    v-html="messages[language].value_description"
    >
    </p>
  </div>
</template>

<script>
export default {
  props: ['language'],
  data () {
    return {
      messages: {
        en: {
          value_primary: 'Sensible defaults',
          value_secondary: 'Utility classes',
          value_tertiary: 'Components',
          value_description: 'This code collection provides \
          <span class="font-600 text-primary-100">opinionated scaffolding</span>\
          <br class="hidden sm:block">\
          to satisfy \
          <span class="font-600 text-primary-100">basic needs</span>\
          of \
          <span class="font-600 text-primary-100">static marketing sites</span>.'
        },
        es: {
          value_primary: 'Defectos sensibles',
          value_secondary: 'Clases de utilidad',
          value_tertiary: 'Componentes',
          value_description: 'Esta collección de código proporciona \
          <span class="font-600 text-primary-100">andamio</span>\
          <br class="hidden sm:block">\
          para satisfacer las \
          <span class="font-600 text-primary-100">necesidades básicas</span>\
          de \
          <span class="font-600 text-primary-100">sitios estáticos de márketing</span>.'
        }
      }
    }
  }
}
</script>
