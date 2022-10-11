<template lang="pug" src="./_blogs.pug"></template>

<script>
import { setData, setMeta } from '~/resources/utils'

export default {
  components: {
  },
  async asyncData ({ params }) {
    const data = await setData(params.blogs, 'posts')
    return { props: data }
  },
  head () {
    return setMeta(this.props)
  }
}
</script>
