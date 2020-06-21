/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: [
    './pages/**/*.html',
    './pages/**/*.vue',
    './components/**/*.vue',
    './layouts/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        'brand-green-lighter': '#8FC749',
        'brand-green-light': '#76B74B',
        'brand-green': '#5AAA4E',
        'brand-green-dark': '#399F4F',
        'brand-green-darker': '#049550',
        'brand-green-darkest': '#008C50',
        'brand-blue-lighter': '#01BEF2',
        'brand-blue-light': '#00B0E9',
        'brand-blue': '#00A5E1',
        'brand-blue-dark': '#009BDA',
        'brand-blue-darker': '#0090D3',
        'brand-blue-darkest': '#0087CB',
        'brand-yellow-lighter': '#FFF212',
        'brand-yellow-light': '#FFF212',
        'brand-yellow': '#FFE11E',
        'brand-yellow-dark': '#FFD126',
        'brand-yellow-darker': '#FFD126',
        'brand-yellow-darkest': '#FEC32B',
        'brand-orange': '#FF5722'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ]
}
