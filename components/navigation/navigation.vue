<template lang='pug' src='./navigation.pug'></template>

<script>
import Topbar from './topbar'
import { setData } from '~/resources/utils'
import router from '~/router/index'
import { removeFocus, trapFocus } from '~/resources/mixins'

export default {
  components: {
    Topbar
  },
  mixins: [removeFocus, trapFocus],
  data: () => ({
    props: null,
    scrollPos: null,
    scrollDir: null,
    windowWidth: 0,
    drawerOpen: false,
    dropdownActive: false,
    currentDropdown: null
  }),
  computed: {
    links () {
      return router.filter(link => link.navigation)
    },
    mobileLinks () {
      return router.filter(link => link.navigation || link.mobile)
    },
    isScrolling () {
      if (process.client) {
        return this.scrollPos > (window.innerHeight * 0.1)
      } else {
        return null
      }
    }
  },
  // watch: {
  //   $route (to, from) {
  //     this.$store.dispatch('PAGE_CHANGE', false)
  //   }
  // },
  async fetch () {
    this.props = await setData('global', 'globalData')
  },
  mounted () {
    this.setWindowWidth()
    window.addEventListener('resize', this.setWindowWidth)
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const currPos = window.pageYOffset
      currPos > this.scrollPos ? this.scrollDir = 'down' : this.scrollDir = 'up'
      this.scrollPos = currPos
    },
    setWindowWidth () {
      this.windowWidth = window.innerWidth
    },
    toggleDropdown (i, e) {
      this.currentDropdown === i ? this.currentDropdown = null : this.currentDropdown = i
      if (this.currentDropdown !== null) {
        this.handleDropdown(e)
      }
    },
    closeDropdown () {
      this.$_removeFocus()
      this.currentDropdown = null
    },
    handleDropdown (e) {
      this.$nextTick(() => {
        if (e.target.nextSibling !== null) {
          const element = e.target.nextSibling
          const focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])')
          const firstFocusableEl = focusableEls[0]
          const lastFocusableEL = focusableEls[focusableEls.length - 1]

          element.addEventListener('keydown', (e) => {
            const isTabPressed = (e.key === 'Tab' || e.keyCode === 9)

            if (!isTabPressed) {
              return
            }

            /* eslint-disable */
            if (e.shiftKey) {
              if (document.activeElement === firstFocusableEl) {
                this.closeDropdown()
              }
            } else {
              if (document.activeElement === lastFocusableEL) {
                this.closeDropdown()
              }
            }
          })
        }
      })
    },
    openDrawer () {
      this.drawerOpen = true
      document.body.classList.add('body-stop')
      this.$_removeFocus()
      this.$nextTick(() => {
        this.$_trapFocus(this.$refs.drawer)
      })
    },
    closeDrawer () {
      this.drawerOpen = false
      this.currentDropdown = null
      document.body.classList.remove('body-stop')
      this.$_removeFocus()
    }
  }
}
</script>

<style lang="sass" src="./navigation.sass"></style>
