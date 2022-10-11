<template lang='pug' src='./base-icon.pug'></template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: () => ``
    }
  },
  computed: {
    svg () {
      return require(`@/assets/icons/${this.name}.svg`)
    }
  }
}
</script>
