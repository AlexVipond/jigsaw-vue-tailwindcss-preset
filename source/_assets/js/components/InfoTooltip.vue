<template lang="html">
  <transition
  appear
  :css="false"
  @before-enter="beforeEnter"
  @enter="enter"
  @leave="leave"
  >
    <div class="absolute pin-t pin-l shadow-lg origin-top-middle"
    :class="[zIndex, bgColor, infoStyles.classes[tooltipArrowPosition]]"
    :style="infoStyles.inline[tooltipArrowPosition]"
    v-if="open"
    >
      <div class="absolute h-0 w-0 border-6 bg-transparent origin-middle" :class="tooltipArrowBorderColor" style="border-right-color: transparent; border-bottom-color: transparent;" :style="tooltipArrowStyles.inline[tooltipArrowPosition]"></div>
      <div class="p-4" :class="textColor">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  props: ['open', 'zIndex', 'bgColor', 'textColor', 'tooltipArrowBorderColor', 'tooltipArrowPosition', 'iconHeight', 'iconWidth'],
  data () {
    return {
      tooltipArrowStyles: {
        'inline': {
          'top-left-top': 'transform: translateY(-100%) translateX(0%) rotate(270deg);',
          'top-left-left': 'transform: translateY(0%) translateX(-100%) rotate(90deg);'
        },
        'classes': {
          'top-left-top': '',
          'top-left-left': ''
        }
      },
      infoStyles: {
        'inline': {
          'top-left-top': `transform: translateX(calc(${this.iconHeight} / 2)) translateY(calc(12px + ${this.iconWidth});`,
          'top-left-left': `transform: translateY(calc(${this.iconHeight} / 2)) translateX(calc(12px + ${this.iconWidth});`
        },
        classes: {
          'top-left-top': 'rounded-tr rounded-br rounded-bl',
          'top-left-left': 'rounded-tr rounded-br rounded-bl'
        }
      }
    }
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
