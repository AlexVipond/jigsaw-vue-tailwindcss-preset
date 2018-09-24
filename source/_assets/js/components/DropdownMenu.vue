<template lang="html">
  <transition
  appear
  :css="false"
  @before-enter="beforeEnter"
  @enter="enter"
  @leave="leave"
  >
    <ul class="cursor-pointer list-reset"
    v-if="open"
    >
      <slot></slot>
    </ul>
  </transition>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  props: ['open'],
  data () {
    return {}
  },
  methods: {
    beforeEnter (el) {
      Velocity(
        el,
        { opacity: 0 },
        { duration: 0 }
      )
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
    }
  }
}
</script>
