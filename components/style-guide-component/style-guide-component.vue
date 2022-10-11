<template lang='pug' src='./style-guide-component.pug'></template>

<script>
import FormContact from '~/components/form/form-contact'

export default {
  components: {
    FormContact
  },
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="sass" src="./style-guide-component.sass"></style>
