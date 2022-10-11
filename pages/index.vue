<template lang="pug" src="./index.pug"></template>

<script>
import { setData } from '~/resources/utils'

import BlockAccordion from '~/components/block/block-accordion/block-accordion'
import BlockBanner from '~/components/block/block-banner'
import BlockContact from '~/components/block/block-contact'
import BlockImageText from '~/components/block/block-image-text'
import BlockItemRow from '~/components/block/block-item-row'
import BlockMasonaryGrid from '~/components/block/block-masonary-grid'
import BlockMultiTestimonial from '~/components/block/block-multi-testimonial'
import BlockSingleTestimonial from '~/components/block/block-single-testimonial'
import BlockSingleImageSlider from '~/components/block/block-single-image-slider'
import BlockTextFH from '~/components/block/block-text-fh'
import BlockTextSimple from '~/components/block/block-text-simple'
import TheHero from '~/components/hero/hero-main'
import CustomHomeBanner from '~/components/custom/custom-home-banner/custom-home-banner.vue'

export default {
  components: {
    BlockAccordion,
    BlockBanner,
    BlockContact,
    BlockImageText,
    BlockItemRow,
    BlockMasonaryGrid,
    BlockSingleTestimonial,
    BlockSingleImageSlider,
    BlockMultiTestimonial,
    BlockTextFH,
    BlockTextSimple,
    TheHero,
    CustomHomeBanner
  },
  async asyncData () {
    const props = await setData('home')
    const global = await setData('global', 'globalData')
    return { props, global }
  },
  // beforeRouteLeave (to, from, next) {
  //   this.$store.dispatch('PAGE_CHANGE', true)
  //   next()
  // },
  transition: 'fade'
}
</script>
