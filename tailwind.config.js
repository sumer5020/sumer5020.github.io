const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ['./docs/.vitepress/**/*.{js,ts,vue}'],
  options: {
    safelist: ['html', 'body'],
  },
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', ...defaultTheme.fontFamily.sans],
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      Accent: "#9e800b", // Accent 1
      Accent2: "#fc5185",  // Accent 2

      dark_primary: "#b498a8",
      dark_secondary: "#9a97a3",
      dark_bg: "#111827",

      light_primary: "#78587b",
      light_secondary: "#624f65",
      light_bg: "#f1f1f1",
    }
    //#dfd9e5
  },
  plugins: [],
  enabled: process.env.NODE_ENV === 'production',
}