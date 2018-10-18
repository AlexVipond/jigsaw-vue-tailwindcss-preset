<template lang="html">
  <transition
    appear
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave">
    <slot></slot>
  </transition>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  data () {
    return {}
  },
  methods: {
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
