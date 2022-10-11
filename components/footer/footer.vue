<template lang="pug" src="./footer.pug"></template>

<script>
import { setData } from '~/resources/utils'
import router from '~/router/index'
import { removeFocus } from '~/resources/mixins'

export default {
  mixins: [removeFocus],
  data: () => ({
    props: null
  }),
  computed: {
    links () {
      return router.filter(link => link.navigation || link.mobile)
    }
  },
  async fetch () {
    this.props = await setData('global', 'globalData')
  }
}
</script>

<style lang="sass" src="./footer.sass"></style>
