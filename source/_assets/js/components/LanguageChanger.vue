<template lang="html">
  <div class="cursor-pointer relative transition flex items-center">
    <button
    class="flex items-center text-color-inherit"
    @click="open = !open"
    @mouseover="showLanguageName = true"
    @mouseleave="showLanguageName = false">
      <transition
      name="slide-in-left"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      >
        <span v-show="open || showLanguageName" class="text-lg">{{ languageName }}</span>
      </transition>

      <svg class="inline-block h-4 w-4 md:h-6 md:w-6 ml-2 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    </button>

    <dropdown-menu
    class="absolute pin-b pin-l move-down-100 rounded-sm overflow-hidden shadow-lg"
    :class="[optionsBgColor, optionsTextColor, optionsZIndex]"
    :open="open"
    >
      <li
      class="py-2 px-3 text-lg transition"
      :class="[optionHoverBgColor, optionHoverTextColor]"
      v-for="language in inactiveLanguages"
      :key="language.code"
      @click="setLanguage(language.code); open = !open"
      >
        {{ language.name }}
      </li>
    </dropdown-menu>
  </div>
</template>

<script>
import DropdownMenu from '../components/DropdownMenu.vue'

export default {
  components: {
    DropdownMenu
  },
  props: ['language', 'languages', 'optionsBgColor', 'optionsTextColor', 'optionsZIndex', 'optionHoverBgColor', 'optionHoverTextColor'],
  data () {
    return {
      open: false,
      showLanguageName: false,
    }
  },
  computed: {
    languageName () {
      let language = this.languages
        .find(lang => lang.code === this.language)

      return language.name
    },
    inactiveLanguages () {
      return this.languages.filter(lang => lang.code !== this.language)
    }
  },
  methods: {
    setLanguage (language) {
      this.$emit('set-language', language)
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
  }
}
</script>
