
export default {
  mode: 'spa',

  env: {
    appEnv: process.env.APP_ENV || 'local',
    apiUrl: process.env.API_BASEURL,
    googleRecaptchaKey: process.env.GOOGLE_RECAPTCHA_KEY,
    enableRegistration: process.env.APP_REGISTRATION_ENABLED === 'true'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_title || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'theme-color', name: 'theme-color', content: '#399F4F' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#399F4F' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/application.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/validation-rules',
    '~/plugins/global-components'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/sentry'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.API_BASEURL
  },

  sentry: {
    dsn: process.env.SENTRY_DSN,
    publishRelease: true,
    config: {
      environment: process.env.APP_ENV || 'local'
    }
  },

  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  router: {
    mode: 'hash'
  }
}
