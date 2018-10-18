<template lang="html">
  <div class="cursor-pointer relative transition flex items-center">
    <button
    class="flex items-center h-full text-color-inherit"
    @click="open = !open"
    @mouseover="showLanguageName = true"
    @mouseleave="showLanguageName = false">
      <slide-in-from-left class="inline-block h-full">
        <span v-show="open || showLanguageName" class="text-lg">{{ languageName }}</span>
      </slide-in-from-left>

      <svg class="inline-block h-full ml-2 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    </button>

    <fade-in-out>
      <dropdown-menu
        class="absolute pin-b pin-l move-down-100 rounded-sm overflow-hidden shadow-lg"
        :class="[optionsBgColor, optionsTextColor, optionsZIndex]"
        v-show="open">
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
    </fade-in-out>
  </div>
</template>

<script>
import SlideInFromLeft from '../components/transitions/SlideInFromLeft.vue'
import FadeInOut from '../components/transitions/FadeInOut.vue'
import DropdownMenu from '../components/DropdownMenu.vue'

export default {
  components: {
    FadeInOut,
    SlideInFromLeft,
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
    }
  }
}
</script>
