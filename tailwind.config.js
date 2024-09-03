module.exports = {
  content: [
    './*.html',
    './*.js'
  ],
  theme: {
    extend: {},
    screens: {
      'phone': '435px',
      // => @media (min-width: 435px)

      'tablet': '640px',
      // => @media (min-width: 640px)

      'laptop': '1024px',
      // => @media (min-width: 1024px)

      'desktop': '1280px',
      // => @media (min-width: 1280px)
    },
  },
  plugins: [],
}
