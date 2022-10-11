<template lang="pug" src="./index.pug" ></template>

<script>
export default {
  props: {
    props: {
      type: Object,
      default: () => ({})
    },
    textColor: {
      type: String,
      default: '#272727'
    },
    noArrow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      this.$emit('onClick')
    }
  }
}
</script>

<style lang="sass" src="./index.sass"></style>
