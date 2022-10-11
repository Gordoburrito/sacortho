import axios from 'axios'
import buildConfig from './build.config.js'
import { siteHead } from './head.config.js'
import { api } from '../resources/api'
import webFonts from '../resources/fonts.js'
import { setData } from '../resources/utils'
import { siteMap, setRobots } from './seo.config'

export default async () => {
  const meta = await setData('home')
  return {
    server: {
      port: 8080,
      host: '0.0.0.0'
    },
    target: 'static',
    generate: {
      async routes () {
        try {
          const response = await axios.get(`${api}/wp/v2/posts?per_page=100`)
          const dataPages = response.headers['x-wp-totalpages']
          let blogArray = response.data
          for (let i = 2; i <= dataPages; i++) {
            const nextPage = await axios.get(`${api}/wp/v2/posts?page=${i}&per_page=100`)
            blogArray = [...blogArray, ...nextPage.data]
          }
          return blogArray.map((blog) => {
            return '/' + blog.slug
          })
        } catch (error) {
          console.error(error)
        }
      }
    },
    head: siteHead(meta),
    globalName: 'globalContent',
    loading: { color: '#fff' },
    components: {
      dirs: [
        '~/components',
        '~/components/custom',
        '~/components/block'
      ]
    },
    polyfill: {
      features: [
        {
          require: 'intersection-observer',
          detect: () => 'IntersectionObserver' in window
        }
      ]
    },
    plugins: [
      '~/resources/components',
      '~/resources/mixins',
      '~/resources/vendors.js',
      {
        src: '~/resources/vendors.client.js',
        mode: 'client'
      }
    ],
    modules: [
      '@nuxtjs/axios',
      '@nuxtjs/style-resources',
      'nuxt-webfontloader',
      '@nuxtjs/robots',
      '@nuxtjs/sitemap',
      'nuxt-polyfill',
      '@nuxtjs/gtm'
    ],
    gtm: {
      id: 'GTM-MQ6QNRZ'
    },
    robots: setRobots,
    sitemap: siteMap,
    css: [
      { src: '~/styles/static/normalize.sass', lang: 'sass' },
      { src: '~/styles/index.sass', lang: 'sass' }
    ],
    styleResources: {
      sass: [
        '~/styles/base/*.sass',
        '~/styles/utilities/*.sass',
        '~/styles/grid/*.sass'
      ]
    },
    stylelint: {
      files: [
        'styles/*.sass',
        'styles/**/*.sass',
        'components/**/*.sass',
        'components/**/**/*.sass'
      ]
    },
    webfontloader: webFonts,
    buildModules: [
      '@nuxtjs/eslint-module',
      '@nuxtjs/stylelint-module',
      'nuxt-gsap-module'
    ],
    gsap: {
      extraPlugins: {
        scrollTrigger: true
      },
      clubPlugins: {
        customEase: true,
        splitText: true
      },
      extraEases: {
        customEase: true
      }
    },
    vue: {
      config: {
        productionTip: false
      }
    },
    build: buildConfig
  }
}
