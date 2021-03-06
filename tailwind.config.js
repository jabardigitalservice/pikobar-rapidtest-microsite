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
        'brand-green-light': 'rgba(90, 170, 78, 0.3);',
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
        'brand-yellow-lighter': '#FFF9E1',
        'brand-yellow-light': '#FF9500',
        'brand-yellow': '#FFE11E',
        'brand-yellow-dark': '#FFD126',
        'brand-yellow-darker': '#FFD126',
        'brand-yellow-darkest': '#FEC32B',
        'brand-orange': '#FF5722',
        'brand-grey': '#333333',
        'brand-grey-light': '#E0E0E0',
        'brand-grey-dark': '#828282',
        'brand-red': '#D6716B'

      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ]
}
