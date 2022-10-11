<template lang="pug">
  .pages-accessibility(:style='{ marginTop: navHeight }')
    .pages-accessibility__container
    h1.pages-accessibility__title Accessibility Statement
    .pages-accessibility__col
      p {{ props.company_name }} is committed to facilitating the accessibility and usability of its website, {{ companyDomain }}, for everyone.  {{ props.company_name }} aims to comply with all applicable standards, including the World Wide Web Consortium's Web Content Accessibility Guidelines 2.0 up to Level AA (WCAG 2.0 AA).
      p {{ props.company_name }} is proud of the efforts that we have completed and that are in-progress to ensure that our website is accessible to everyone. Our site does include third-party plugins that are not maintained by us which can impact accessibility. Should you experience any difficulty in accessing any part of this website #[span(v-if='props.phone.number') , please feel free to call us at {{ props.phone.number }} or ] email us at #[a(:href='"mailto:" + props.email' tabindex='0') {{ props.email }} ] and we will work with you to provide the information or service you seek through an alternate communication method that is accessible for you consistent with applicable law (for example, through telephone support).
</template>

<script>
import { setData } from '~/resources/utils'
import { url } from '~/resources/api'

export default {
  data: () => ({
    companyDomain: url.slice(0, -1),
    navHeight: null
  }),
  async asyncData () {
    const props = await setData('global', 'globalData')
    return { props }
  },
  mounted () {
    this.getNavHeight()
    this.$store.dispatch('SET_NAV', true)
    if (!this.$store.state.siteLoaded) {
      this.$store.dispatch('VIEW_SITE', true)
    }
    window.addEventListener('resize', this.getNavHeight)
  },
  beforeRouteLeave (to, from, next) {
    this.$store.dispatch('SET_NAV', false)
    next()
  },
  methods: {
    getNavHeight () {
      const nav = document.querySelector('.navigation')
      this.navHeight = `${nav.clientHeight / 16}rem`
    }
  },
  transition: 'fade'
}
</script>

<style lang="sass" src="./index.sass"></style>
