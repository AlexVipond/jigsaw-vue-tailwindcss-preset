<template>
  <transition
  name="fade-in"
  :css="false"
  @before-enter="beforeEnter"
  @enter="enter"
  @leave="leave"
  >
    <div class="fixed pin p-6 bg-true-black-50 flex justify-center items-center"
    :class="zIndex"
    v-if="open"
    >
      <div class="inline-block" v-on-clickaway="clickaway">
        <!-- Modal contents -->
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  import Velocity from 'velocity-animate'
  import { mixin as clickaway } from 'vue-clickaway'

  export default {
    mixins: [ clickaway ],
    props: ['open', 'zIndex'],
    data () {
      return {}
    },
    methods: {
      beforeEnter (el) {
        el.style.opacity = 0
      },
      enter (el, done) {
        Velocity(
          el,
          { opacity: 1 },
          { duration: 200, complete: done }
        )
      },
      leave (el, done) {
        Velocity(
          el,
          { opacity: 0 },
          { duration: 200, complete: done }
        )
      },
      clickaway () {
        this.$emit('close')
      }
    },
    created () {
      const escapeListener = (evt) => {
        if(evt.key === 'Escape') {
          this.$emit('close')
        }
      }

      document.addEventListener('keydown', escapeListener)

      this.$on('hook:beforeDestroy', () => {
        document.removeEventListener('keydown', escapeListener)
      })
    },
    watch: {
      open: function() {
        document.body.classList.toggle('overflow-hidden')
        console.log('here')
      }
    }
  }
</script>
