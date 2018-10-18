<template>
  <fade-in-out>
    <div class="fixed pin p-6 bg-true-black-50 flex justify-center items-center"
    :class="zIndex"
    v-if="open"
    >
      <div class="inline-block w-full max-h-full flex" :class="[contentMaxWidth]" v-on-clickaway="clickaway">
        <!-- Modal contents -->
        <slot></slot>
      </div>
    </div>
  </fade-in-out>
</template>

<script>
import FadeInOut from '../components/transitions/FadeInOut.vue'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  components: {
    FadeInOut
  },
  props: {
    open: {
      type: Boolean,
      required: true
    },
    zIndex: {
      type: String
    },
    contentMaxWidth: {
      type: String
    },
    closeEvent: {
      type: String
    },
  },
  data () {
    return {}
  },
  methods: {
    clickaway () {
      this.$emit(this.closeEvent)
    }
  },
  created () {
    const escapeListener = (evt) => {
      if(evt.key === 'Escape') {
        this.$emit(this.closeEvent)
      }
    }

    document.addEventListener('keydown', escapeListener)

    this.$on('hook:beforeDestroy', () => {
      document.removeEventListener('keydown', escapeListener)
    })
  },
  watch: {
    open () {
      if(this.open) {
        this.$root.$data.totalOpenModals++
      } else {
        this.$root.$data.totalOpenModals--
      }
    }
  },
  mixins: [ clickaway ],
}
</script>
