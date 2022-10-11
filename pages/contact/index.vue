<template lang='pug' src='./index.pug'></template>

<script>
import { setData, setMeta } from '~/resources/utils'

import BlockBanner from '~/components/block/block-banner'
import BlockContact from '~/components/block/block-contact'
import BlockForm from '~/components/block/block-contact-form'
import BlockImageText from '~/components/block/block-image-text'
import BlockItemRow from '~/components/block/block-item-row'
import BlockMasonaryGrid from '~/components/block/block-masonary-grid'
import BlockSingleImageSlider from '~/components/block/block-single-image-slider'
import BlockMultiTestimonial from '~/components/block/block-multi-testimonial'
import BlockSingleTestimonial from '~/components/block/block-single-testimonial'
import BlockTextFH from '~/components/block/block-text-fh'
import BlockTextSimple from '~/components/block/block-text-simple'
import TheHero from '~/components/hero/hero-main'

export default {
  components: {
    BlockBanner,
    BlockContact,
    BlockForm,
    BlockImageText,
    BlockItemRow,
    BlockMasonaryGrid,
    BlockSingleImageSlider,
    BlockSingleTestimonial,
    BlockMultiTestimonial,
    BlockTextFH,
    BlockTextSimple,
    TheHero
  },
  async asyncData () {
    const props = await setData('contact')
    const global = await setData('global', 'globalData')
    return { props, global }
  },
  // beforeRouteLeave (to, from, next) {
  //   this.$store.dispatch('PAGE_CHANGE', true)
  //   next()
  // },
  transition: 'fade',
  head () {
    return setMeta(this.props)
  }
}
</script>
