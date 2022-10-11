<template lang="pug" src="./index.pug" ></template>

<script>
export default {
  props: {
    props: {
      type: Object,
      default: () => ({})
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
