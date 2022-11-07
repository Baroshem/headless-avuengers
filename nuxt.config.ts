// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    ['@nuxt/image-edge', {
      domains: ['a.storyblok.com']
    }],
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/algolia', {
      apiKey: '',
      applicationId: ''
    }],
    ['@storyblok/nuxt', {
      accessToken: ''
    }]
  ]
})
