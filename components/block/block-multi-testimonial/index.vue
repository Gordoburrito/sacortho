<template lang="pug" src="./index.pug" ></template>

<script>
export default {
  props: {
    props: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    currIndex: 0,
    maxHeight: 0,
    sliderLength: null
  }),
  mounted () {
    this.getMaxHeight()
    this.sliderLength = this.props.testimonials.length - 1
    window.addEventListener('resize', this.getMaxHeight)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getMaxHeight)
  },
  methods: {
    getMaxHeight () {
      const heightArr = []
      this.$refs.slideContent.map(el => heightArr.push(el.clientHeight))
      this.maxHeight = (Math.max(...heightArr) / 16) + 'rem'
    },
    handleSlide (str) {
      if (str === 'prev') {
        this.currIndex === 0 ? this.currIndex = this.sliderLength : this.currIndex--
      }
      if (str === 'next') {
        this.currIndex === this.sliderLength ? this.currIndex = 0 : this.currIndex++
      }
    }
  }
}
</script>

<style lang="sass" src="./index.sass"></style>
