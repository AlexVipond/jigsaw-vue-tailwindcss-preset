<template lang="html">
  <button
  class="cursor-pointer relative flex items-center transition"
  @click="open = !open"
  @mouseover="mouseover = true"
  @mouseleave="mouseover = false"
  >
    <transition
    name="slide-in-left"
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
    >
      <span v-if="open" v-else-if="mouseover">{{ languageName }}</span>
    </transition>

    <svg class="inline-block h-4 w-4 ml-2 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>

    <dropdown-menu
    class="absolute pin-b pin-l move-down-100 rounded-sm overflow-hidden shadow-lg"
    :class="[optionsBgColor, optionsTextColor, optionsZIndex]"
    :open="open"
    @click="open = !open"
    >
      <div
      class="py-2 px-3 transition"
      :class="[optionHoverBgColor, optionHoverTextColor]"
      v-for="language in inactiveLanguages"
      :key="language.code"
      @click="setLanguage(language.code)"
      >
        {{ language.name }}
      </div>
    </dropdown-menu>
  </button>
</template>

<script>
import DropdownMenu from '../components/DropdownMenu.vue'

export default {
  components: {
    DropdownMenu
  },
  props: ['optionsBgColor', 'optionsTextColor', 'optionsZIndex', 'optionHoverBgColor', 'optionHoverTextColor'],
  data () {
    return {
      open: false,
      mouseover: false,
      language: 'en',
      languages: [
        {
          code: 'en',
          name: 'English'
        },
        {
          code: 'es',
          name: 'Español'
        }
      ]
    }
  },
  computed: {
    languageName () {
      let language = this.languages
        .find(language => language.code === this.language)

      return language.name
    },
    inactiveLanguages () {
      return this.languages.filter(language => language.code !== this.language)
    }
  },
  methods: {
    setLanguage (languageCode) {
      this.language = languageCode
      this.$emit('set-language', this.language)
    },
    beforeEnter (el) {
      Velocity(
        el,
        { opacity: 0, translateX: '100%' },
        { duration: 0 }
      )
    },
    enter (el, done) {
      Velocity(
        el,
        { opacity: 1, translateX: '0%' },
        { duration: 200, complete: done }
      )
    },
    leave (el, done) {
      Velocity(
        el,
        { opacity: 0, translateX: '100%' },
        { duration: 200, complete: done }
      )
    }

  },
}
</script>
