<template lang='pug' src='./index.pug'></template>

<script>
import { setData, setMeta } from '~/resources/utils'

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

export default {
  components: {
    BlockBanner,
    BlockContact,
    BlockImageText,
    BlockItemRow,
    BlockMasonaryGrid,
    BlockSingleTestimonial,
    BlockMultiTestimonial,
    BlockSingleImageSlider,
    BlockTextFH,
    BlockTextSimple,
    TheHero
  },
  async asyncData () {
    const props = await setData('get-started')
    const global = await setData('global', 'globalData')
    return { props, global }
  },
  transition: 'fade',
  head () {
    return setMeta(this.props)
  }
}
</script>
