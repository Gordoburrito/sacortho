<template src='./default.pug' lang='pug'></template>

<script>
import SkipLink from '~/components/base/base-skip-link'
import TheFooter from '~/components/footer/footer'
import TheNavigation from '~/components/navigation/navigation'

export default {
  components: {
    SkipLink,
    TheFooter,
    TheNavigation
  },
  watch: {
    $route: 'onRouteChange'
  },
  methods: {
    onRouteChange () {
      const target = document.querySelector('#page-wrapper')
      target.focus()
    }
  }
}
</script>

<style>
  main:focus {
    outline: none;
  }
  #page-wrapper:focus {
    outline: none;
  }
</style>
