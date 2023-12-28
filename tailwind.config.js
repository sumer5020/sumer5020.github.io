module.exports = {
  content: ['./docs/.vitepress/**/*.{js,ts,vue}'],
  options: {
    safelist: ['html', 'body'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
  enabled: process.env.NODE_ENV === 'production',
}