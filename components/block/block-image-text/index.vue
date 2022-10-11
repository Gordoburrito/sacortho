<template lang="pug" src="./index.pug" ></template>

<script>
import { fadeUpIn, titleAnimation } from '~/resources/mixins'

export default {
  mixins: [fadeUpIn, titleAnimation],
  props: {
    props: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    contentHeight: null,
    windowWidth: null
  }),
  mounted () {
    this.setWindowWidth()
    this.setImageHeight()
    if (this.$refs.itTitle) {
      this.$_titleAnimation(this.$refs.itTitle, '--itBarWidth')
    }
    if (this.$refs.itBtns) {
      this.$_fadeUpIn(this.$refs.itBtns, 32, 'bottom bottom')
    }
    this.$refs.itParagraphs.forEach((item, i) => {
      this.$_fadeUpIn(item, 32, 'bottom bottom')
    })
    window.addEventListener('resize', this.setWindowWidth)
    window.addEventListener('resize', this.setImageHeight)
  },
  beforeDestroy () {
    window.addEventListener('resize', this.setWindowWidth)
    window.removeEventListener('resize', this.setImageHeight)
  },
  methods: {
    setImageHeight () {
      if (this.windowWidth > 768 && this.$refs.contentHeight) {
        this.contentHeight = (this.$refs.contentHeight.clientHeight / 16) + 'rem'
      } else {
        this.contentHeight = null
      }
    },
    setWindowWidth () {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

<style lang="sass" src="./index.sass"></style>
