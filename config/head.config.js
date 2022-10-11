import axios from 'axios'
import { api, url } from '../resources/api'

export const siteHead = (meta) => {
  return {
    htmlAttrs: { lang: 'en' },
    title: meta.seo.page_title ? meta.seo.page_title : meta.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: meta.seo.page_description },
      { hid: 'keywords', name: 'keywords', content: meta.seo.page_keywords ? meta.seo.page_keywords : '' },
      // OG Meta
      { hid: 'og:type', property: 'og:type', content: 'Website' },
      meta.seo.social_meta.og_meta.title && { hid: 'og:title', property: 'og:title', content: meta.seo.social_meta.og_meta.title },
      meta.seo.social_meta.og_meta.description && { hid: 'og:description', property: 'og:description', content: meta.seo.social_meta.og_meta.description },
      meta.seo.social_meta.og_meta.image && { hid: 'og:image', property: 'og:image', content: meta.seo.social_meta.og_meta.image },
      { hid: 'og:url', property: 'og:url', content: url }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      { hid: 'canonical', rel: 'canonical', href: url }
    ],
    script: [
      {
        src: 'https://onlineschedulingv2.threadcommunication.com',
        body: true
      },
      {
        hid: 'openChair',
        type: 'text/javascript',
        body: true,
        innerHTML: `OpenChair.init({ token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmlnaW4iOiJodHRwczovL3NhY29ydGhvLmNvbS8iLCJwcmFjdGljZV9pZCI6Ijg0OCJ9.K5Y0Gf4Gp7HAkU-a6DTfmoYlmioSQXkVfPGk-bTFX0o", })`
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      openChair: ['innerHTML']
    }
  }
}
