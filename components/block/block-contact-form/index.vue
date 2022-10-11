<template lang="pug" src="./index.pug" ></template>

<script>
import FormContact from '~/components/form/form-contact'

export default {
  components: {
    FormContact
  },
  props: {
    props: {
      type: Object,
      default: () => ({})
    },
    global: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    location () {
      return this.global.location[0]
    },
    phoneAria () {
      if (this.global.phone.number) {
        return this.global.phone.number.replace(/-/g, '').split('').join(' ')
      } else {
        return null
      }
    }
  }
}
</script>

<style lang="sass" src="./index.sass"></style>
