import axios from 'axios'
import { api, url } from '../resources/api'

export const siteMap = {
  path: '/sitemap.xml',
  hostname: url,
  gzip: true,
  lastmod: new Date(),
  sitemaps: [
    {
      path: '/sitemap-pages.xml',
      defaults: {
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date()
      },
      routes: [
        {
          url: '/',
          priority: 1
        }
      ]
    },
    {
      path: '/blog/sitemap-blog.xml',
      defaults: {
        changefreq: 'daily',
        priority: 0.1,
        lastmod: new Date()
      },
      exclude: ['/**'],
      routes: () =>
        axios
          .get(`${api}/wp/v2/posts`)
          .then(res => res.data.map(post => `/blog/${post.slug}`))
    }
  ]
}

export const setRobots = {
  UserAgent: '*',
  Disallow: '',
  Sitemap: url + 'sitemap.xml'
}
