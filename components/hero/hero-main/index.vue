<template lang="pug" src="./index.pug"></template>

<script>
export default {
  props: {
    props: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    imgSrc: null,
    webpSrc: null,
    options: {
      root: null,
      rootMargin: '0px',
      threshold: [ 0.01 ]
    }
  }),
  mounted () {
    if (this.$refs.image) {
      this.loadImage()
    }
    if (this.$refs.video) {
      this.$refs.video.addEventListener('loadeddata', () => {
        if (!this.$store.state.siteLoaded) {
          this.$store.dispatch('VIEW_SITE', true)
        }
        this.handleAnimation()
      })
    }
    if (!this.$refs.video && !this.props.image.src) {
      if (!this.$store.state.siteLoaded) {
        this.$store.dispatch('VIEW_SITE', true)
      }
      this.handleAnimation()
    }
  },
  methods: {
    loadImage () {
      this.imgSrc = this.props.image.src
      this.webpSrc = this.props.image.webp
      this.$refs.image.children[1].onload = () => {
        if (!this.$store.state.siteLoaded) {
          this.$store.dispatch('VIEW_SITE', true)
        }
        this.handleAnimation()
      }
    },
    handleCtaClick () {
      // Enter logic here for the CTA button
      console.log('click CTA')
    },
    handleAnimation (delay) {
      this.$CustomEase.create('customEaseOut', '0.23, 1, 0.32, 1')
      const tl = this.$gsap.timeline()
      const heroTitle = this.$refs.heroTitle
      const heroText = this.$refs.heroText
      const heroBtn = this.$refs.heroBtn

      /* eslint-disable */
      const titleSplit = new this.$SplitText(heroTitle, { type: 'lines' })

      tl.from(titleSplit.lines, {
        y: '32',
        opacity: 0,
        duration: 1.25,
        stagger: 0.115,
        delay: 0.25,
        ease: 'customEaseOut'
      })
      if (heroText) {
        tl.from(heroText, {
          y: '24',
          opacity: 0,
          duration: 1,
          ease: 'customEaseOut'
        }, '<+=0.175')
      }
      if (heroBtn) {
        tl.from('.hero-main__cta', {
          y: '24',
          opacity: 0,
          duration: 1,
          ease: 'customEaseOut'
        }, '<+=0.175')
      }
      if (this.$route.path === '/') {
        tl.from('.hero-main__down', {
          opacity: 0,
          duration: 0.6,
          ease: 'ease'
        })
      }
    }
  }
}
</script>

<style lang="sass" src="./index.sass"></style>
